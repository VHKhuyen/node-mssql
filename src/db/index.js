const { Connection, Request, TYPES } = require("tedious");
const config = require("config.json");

const connection = new Connection(config);
connection.on("connect", (err) => {
  console.log("Connected");
  executeStatement;
});

connection.connect();

function executeStatement() {
  const selectQuery = "select * from dbo.users";
  const request = new Request(selectQuery, function (err) {
    if (err) {
      console.log(err);
    }
  });
  request.on("requestCompleted", function (rowCount, more) {
    connection.close();
  });
  connection.execSql(request);
}
