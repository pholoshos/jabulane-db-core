const { scryptSync, createDecipheriv } = require("node:crypto");
const fs = require("fs");

class ConfigDatabaseHelper {
  constructor(configFile, DATABASE_ENCRYPTION) {
    const { algorithm, iv, password } = DATABASE_ENCRYPTION;
    this.configFile = configFile;
    this.algorithm = algorithm;
    this.iv = iv;
    this.password = password;
  }

  readEncryptedConfig() {
    try {
      const data = fs.readFileSync(this.configFile, "utf8");
      const initVector = Buffer.from(this.iv, "hex");
      const key = scryptSync(this.password, "salt", 32);
      const decipher = createDecipheriv(this.algorithm, key, initVector);
      let decrypted = decipher.update(data, "hex", "utf8");
      decrypted += decipher.final("utf8");
      return JSON.parse(decrypted);
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  getRoles() {
    const config = this.readEncryptedConfig();
    return config.roles || [];
  }
}

module.exports = ConfigDatabaseHelper;
