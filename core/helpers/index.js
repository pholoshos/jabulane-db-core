// helpers.js
const fs = require("fs");
const crypto = require("crypto");

class DatabaseHelper {
  constructor(fileName, encryptionKey) {
    this.fileName = fileName;
    this.encryptionKey = encryptionKey;
  }

  readEncryptedDatabase() {
    try {
      const encryptedData = fs.readFileSync(this.fileName, "utf8");
      const decipher = crypto.createDecipher("aes-256-cbc", this.encryptionKey);
      let decryptedData = decipher.update(encryptedData, "hex", "utf8");
      decryptedData += decipher.final("utf8");
      return JSON.parse(decryptedData);
    } catch (error) {
      console.error(error);
      return { root: {} };
    }
  }

  // Function to get a specific entry from a collection by ID
  getEntryById(collectionName, id) {
    const database = this.readEncryptedDatabase();
    const collection = database.root[collectionName];

    if (collection) {
      const entry = collection.find((item) => item.id === id);

      if (entry) {
        return entry;
      } else {
        return null; // Entry not found
      }
    } else {
      return null; // Collection not found
    }
  }

  // Function to get all collection names
  getCollectionNames() {
    const database = this.readEncryptedDatabase();
    return Object.keys(database.root);
  }

  // Function to get data from a specific collection
  getCollectionData(collectionName) {
    const database = this.readEncryptedDatabase();
    if (database.root[collectionName]) {
      return database.root[collectionName];
    } else {
      return null;
    }
  }

  writeEncryptedDatabase(data) {
    const cipher = crypto.createCipher("aes-256-cbc", this.encryptionKey);
    let encryptedData = cipher.update(JSON.stringify(data), "utf8", "hex");
    encryptedData += cipher.final("hex");
    fs.writeFileSync(this.fileName, encryptedData);
  }

  // Function to check if a duplicate entry exists in a collection
  isDuplicateEntry(collectionName, newData, uniqueIdField = "id") {
    return false;
    // const database = this.readEncryptedDatabase();
    // const collection = database.root[collectionName];

    // if (collection) {
    //   // Check if any existing entry matches the new data
    //   return collection.some((existingData) => {
    //     // Check for duplicates by comparing all fields except the unique identifier
    //     if (existingData[uniqueIdField] === newData[uniqueIdField]) {
    //       // Skip comparison for the unique identifier
    //       return false;
    //     }

    //     // Check for duplicates by comparing other fields
    //     return Object.keys(existingData).every((key) => {
    //       return key === uniqueIdField || existingData[key] === newData[key];
    //     });
    //   });
    // } else {
    //   return false;
    // }
  }

  addDataToCollection(collectionName, newData) {
    const db = this.readEncryptedDatabase();

    if (!db.root[collectionName]) {
      db.root[collectionName] = [];
    }

    // Assuming newData has a 'name' field for duplicate check
    if (this.isDuplicateEntry(collectionName, newData.name)) {
      throw new Error(`Duplicate entry for name`);
    }

    // Generate a unique ID and add it to the data
    newData.id = this.generateUniqueId();

    db.root[collectionName].push(newData);
    this.writeEncryptedDatabase(db);
  }

  deleteDataFromCollection(collectionName, id) {
    const db = this.readEncryptedDatabase();
    const collection = db.root[collectionName];

    if (collection) {
      const index = collection.findIndex((entry) => entry.id === id);

      if (index !== -1) {
        collection.splice(index, 1);
        this.writeEncryptedDatabase(db);
        return true;
      }
    }

    return false;
  }

  updateDataInCollection(collectionName, id, newData) {
    const db = this.readEncryptedDatabase();
    const collection = db.root[collectionName];

    if (collection) {
      const index = collection.findIndex((entry) => entry.id === id);

      if (index !== -1) {
        // Assuming newData has a 'name' field for duplicate check
        if (this.isDuplicateEntry(collectionName, newData.name, id)) {
          throw new Error(`Duplicate entry for name`);
        }

        collection[index] = { ...collection[index], ...newData };
        this.writeEncryptedDatabase(db);
        return true;
      }
    }

    return false;
  }

  searchEntityByField(collectionName, fieldName, searchValue) {
    const database = this.readEncryptedDatabase();
    const collection = database.root[collectionName];
  
    if (collection) {
      const matchingEntities = collection.filter(item => {
        // Check if any field matches the search value
        for (const key in item) {
          if (item.hasOwnProperty(key) && typeof item[key] === 'string' && item[key].includes(searchValue)) {
            return true;
          }
        }
        return false;
      });
  
      return matchingEntities;
    } else {
      return null; // Collection not found
    }
  }

  

  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

module.exports = DatabaseHelper;
