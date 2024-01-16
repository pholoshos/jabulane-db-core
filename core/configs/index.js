const crypto = require('crypto');
const fs = require('fs');

class ConfigDatabaseHelper {
  constructor(configFile, encryptionKey) {
    this.configFile = configFile;
    this.encryptionKey = encryptionKey;
  }

  readEncryptedConfig() {
    try {
      const encryptedData = fs.readFileSync(this.configFile, 'utf8');
      const decipher = crypto.createDecipher('aes-256-cbc', this.encryptionKey);
      let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
      decryptedData += decipher.final('utf8');
      return JSON.parse(decryptedData);
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
