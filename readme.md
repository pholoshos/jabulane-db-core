# Jabulane DB Readme

[Jabulane DB](https://www.npmjs.com/package/jabulane-db-core) is a lightweight and fast database solution designed for quick and easy integration into your Node.js applications. This readme provides a step-by-step guide on the fastest way to get Jabulane DB up and running using the `jabulane-db-core` package.

## Installation

To use Jabulane DB in your project, you need to install the `jabulane-db-core` package. Open your terminal and run the following command:

```bash
npm install jabulane-db-core

Step 2: Start the Database

To start the Jabulane DB, simply invoke the imported jabulaneDB function:

javascript

// Start the database
jabulaneDB();


// Can Provide the port you wish to start your database on
const port = 3000;
jabulaneDB(port)

## Important Note

Before running your Jabulane DB-powered application, make sure to perform the following steps:

1. **Create a `.env` File:**
   - Create a `.env` file in the root directory of your project.
   - Add the following line to your `.env` file, replacing `your-secret-key` with your chosen encryption key:
     ```
     secret_key=your-secret-key
     ```

2. **Create a `database.jbb` File:**
   - Create a `database.jbb` file in the root directory of your project.
   - This file will serve as the database storage for Jabulane DB.

### Important Reminder: Manual Backups

It's essential to note that Jabulane DB currently does not provide an automated backup system. Therefore, ensure that you regularly create backups of your `database.jbb` file to prevent data loss in case of unforeseen events.

To create a backup:
- Periodically make a copy of your `database.jbb` file.
- Store backups in a secure location, and consider versioning them to track changes over time.

These manual backups are crucial for safeguarding your data. Please incorporate a backup routine into your development workflow to ensure the integrity of your application's data.

Ensure that the `.env` file is added to your project's `.gitignore` to prevent sensitive information from being exposed.

Example `.gitignore` entry:
```plaintext
# .gitignore
.env
