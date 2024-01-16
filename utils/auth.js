const jwt = require("jsonwebtoken");
require("dotenv/config");

const auth = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1].toString();
  try {
    const secretKey = process.env.secret_key;
    const decoded = jwt?.verify(token, secretKey);
    req.id = decoded._id;
    req.schoolId = decoded.schoolId;

    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

const generateAccessToken = (user = { username: "admin" }) => {
  const secretKey = process.env.secret_key;
  return jwt.sign(user, secretKey, { expiresIn: "1h" });
};

module.exports = {auth, generateAccessToken};
