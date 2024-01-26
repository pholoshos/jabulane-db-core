const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { generateAccessToken, auth } = require("./utils/auth.cjs");
const path = require("path");
const { exec } = require('child_process');

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Serve static files from the 'portal' directory
app.use(express.static(path.join(__dirname, "portal")));

// Handle all routes by serving the 'index.html' file
app.get("/portal", (req, res) => {
  res.sendFile(path.join(__dirname, "portal", "index.html"));
});

const jabDBRoute = require("./core/actions/index.cjs");
import('./portal/index.js')

app.use("/", auth, jabDBRoute);

const jabulaneDB = (port = 0) => {
  const server = app.listen(port, () => {
    const { port } = server.address();
    const token = generateAccessToken();
    console.log(
      `Jabulane-db: Database is running on port ${port}. access it on key is ${token}`
    );
    // Specify the URL you want to open
    const urlToOpen = `http://localhost:3003/landing/${port}/${token}`;
    
    console.log(`Open ${urlToOpen} in the default web browser`);
    (`open ${urlToOpen}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error opening ${urlToOpen}: ${error.message}`);
        return;
      }
      console.log(`Opened ${urlToOpen} in the default web browser`);
    });
  });

  return server;
};

jabulaneDB();

module.exports = jabulaneDB;
