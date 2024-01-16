const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const jabulaneDB = (port = 0) => {
  const server = app.listen(port, () => {
    const { port } = server.address();
    console.log(`Jabulane-db: Database is running on port ${port}`);
  });

  return server;
};

module.exports = jabulaneDB;
