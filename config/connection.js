var mysql = require("mysql");

//Set up mysql credentials
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "8706213Ab",
  database: "burgers_db"
});

//set up the connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;