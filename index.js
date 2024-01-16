const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const jabDBRoute = require("./core/actions/index");
const { generateAccessToken, auth } = require("./utils/auth");
app.use("/", auth, jabDBRoute);

const jabulaneDB = (port = 0) => {
  const server = app.listen(port, () => {
    const { port } = server.address();
    console.log(
      `Jabulane-db: Database is running on port ${port}. access it on key is ${generateAccessToken()}`
    );
  });

  return server;
};

jabulaneDB();

module.exports = jabulaneDB;
