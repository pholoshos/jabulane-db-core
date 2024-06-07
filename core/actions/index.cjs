// mainRouter.js
const express = require("express");
const DatabaseHelper = require("../helpers/index.cjs");
const ConfigDatabaseHelper = require("../configs//index.cjs");

const router = express.Router();
const DATABASE_FILE = "database.jbb";
const CONFIG_FILE = "configDatabase.jbb";

const DATABASE_ENCRYPTION = {
  algorithm: "aes-256-cbc",
  iv: "6db55d5b026ef1b78341cb541d9804f0",
  password: "Password used to generate key",
};

const dbHelper = new DatabaseHelper(DATABASE_FILE, DATABASE_ENCRYPTION);
const configDbHelper = new ConfigDatabaseHelper(
  CONFIG_FILE,
  DATABASE_ENCRYPTION
);

// Middleware to check user roles
function checkUserRole(req, res, next) {
  const userRoles = req.userRoles; // Modify this based on your authentication mechanism
  const requiredRoles = configDbHelper.getRoles();

  if (!requiredRoles.some((role) => userRoles.includes(role))) {
    return res.status(403).json({ error: "Permission denied" });
  }

  // User has the required role, proceed to the next middleware or route handler
  next();
}

// Apply the role check middleware to all routes
// router.use(checkUserRole);

// Helper function to generate a unique ID
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Routes for managing roles in the configuration database
// ... (unchanged)

// Routes for managing data in the main database

// Get all data from a collection with sorting, filtering, and pagination
router.get("/:collectionName", (req, res) => {
  const { collectionName } = req.params;
  const { filters, sortField, sortOrder, page, pageSize } = req.query;

  const data = dbHelper.getCollectionData(collectionName, {
    filters: filters ? JSON.parse(filters) : {},
    sortField,
    sortOrder,
    page,
    pageSize,
  });

  res.json(data);
});

// Get all collection names
router.get("/db/collections", (req, res) => {
  const collectionNames = dbHelper.getCollectionNames();
  res.json(collectionNames);
});

router.get("/:collectionName/:id", (req, res) => {
  const { collectionName, id } = req.params;

  // Get a specific entry from the collection by ID
  const entry = dbHelper.getEntryById(collectionName, id);

  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: "Entry not found" });
  }
});

router.get("/:collectionName/search", (req, res) => {
  const { collectionName } = req.params;
  const { fieldName, searchValue } = req.query;

  if (!fieldName || !searchValue) {
    return res
      .status(400)
      .json({ error: "Both fieldName and searchValue are required" });
  }

  // Search for entities in the collection by any field
  const matchingEntities = dbHelper.searchEntityByField(
    collectionName,
    fieldName,
    searchValue
  );

  if (matchingEntities) {
    res.json(matchingEntities);
  } else {
    res
      .status(404)
      .json({ error: "Collection not found or no matching entities" });
  }
});

router.post("/:collectionName", (req, res) => {
  const { collectionName } = req.params;
  const newData = req.body;

  // Check for duplicate data across all fields except the unique identifier
  const isDuplicate = dbHelper.isDuplicateEntry(collectionName, newData);

  if (isDuplicate) {
    return res.status(400).json({ error: "Duplicate entry" });
  }

  dbHelper.addDataToCollection(collectionName, newData);
  res.json({ message: "Data added successfully" });
});

router.delete("/:collectionName/:id", (req, res) => {
  const { collectionName, id } = req.params;
  const deleted = dbHelper.deleteDataFromCollection(collectionName, id);
  if (deleted) {
    res.json({ message: "Data deleted successfully" });
  } else {
    res.status(404).json({ error: "Data not found" });
  }
});

router.put("/:collectionName/:id", (req, res) => {
  const { collectionName, id } = req.params;
  const newData = req.body;

  // Check for duplicate data based on a specific field (e.g., 'name')
  const duplicateCheckField = "name"; // Adjust this based on your data structure
  const isDuplicate = dbHelper.isDuplicateEntry(
    collectionName,
    newData[duplicateCheckField],
    id
  );

  if (isDuplicate) {
    return res
      .status(400)
      .json({ error: `Duplicate entry for ${duplicateCheckField}` });
  }

  dbHelper.updateDataInCollection(collectionName, id, newData);
  res.json({ message: "Data updated successfully" });
});

module.exports = router;
