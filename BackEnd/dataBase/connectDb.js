const mysql = require("mysql2");

const connectoSQL = () => {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "myapp",
  });

  db.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log("Connected to the database.");
    }
  });
};

module.exports = connectoSQL;
