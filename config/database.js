const mysql = require('mysql'); // Replace with your preferred database library
const config_database  = require('../config/config')

class Database{
    constructor(){
      this.connection = mysql.createConnection(config_database);
    }

  createDatabaseConnection() {
    this.connection.connect();
    console.log("connected in database")
    return this.connection;
  }

  endDatabaseConnection() {
    this.connection.end(err => {
      if (err) {
          console.error('Error closing database connection:', err);
      } else {
          console.log('Database connection closed');
      }
  });
  }
}

module.exports = Database