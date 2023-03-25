const { Connection, Request } = require("tedious");
const { Sequelize } = require("sequelize");

module.exports = db = {};
const config = {
  server: "VHKhuyen\\SQLEXPRESS",
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true,
    database: "fastfood",
  },
};

async function ensureDbExists(dbName) {
  return new Promise((resolve, reject) => {
    const connection = new Connection(config);

    connection.connect((err) => {
      if (err) {
        console.error(err);
        reject(`Connection Failed: ${err.message}`);
      }

      const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${config.options.database}') CREATE DATABASE [${config.options.database}];`;

      const request = new Request(createDbQuery, (err) => {
        if (err) {
          console.error(err);
          reject(`Create DB Query Failed: ${err.message}`);
        }

        // query executed successfully
        resolve();
      });

      connection.execSql(request);
    });
  });
}

async function initialize() {
  const dialect = "mssql";
  const host = config.server;
  // create db if it doesn't already exist
  await ensureDbExists(config.options.database);

  // connect to db
  const sequelize = new Sequelize(dbName, null, null, {
    host,
    dialect,
    logging: false,
  });

  // init models and add them to the exported db object
  db.User = require("../users/user.model")(sequelize);

  // sync all models with database
  await sequelize.sync({ alter: true });
}

initialize();
