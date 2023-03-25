const sql = require("mssql/msnodesqlv8");

var config = {
  server: "VHKhuyen\\SQLEXPRESS",
  database: "fastfood",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

sql.connect(config, function (err) {
  if (err) console.log(err);

  var request = new sql.Request();

  var query = "select * from dbo.users";

  request.query(query, function (err, records) {
    if (err) console.log(err);
    else {
      console.log(records);
      //  your out put as records
    }
  });
});
