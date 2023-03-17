const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "dororoza55",
  database: "vacCenter",
});

module.exports = connection;
