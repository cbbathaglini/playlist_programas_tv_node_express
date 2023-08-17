const mysql = require('mysql'); // Replace with your preferred database library
const config_database  = require('../config/config')
const Conversion  = require('../model/Conversion')

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


  executeDB(query, params, typeConversion){
    console.log("20")
    return new Promise((resolve, reject) => {
      this.connection.query(query,[params],(error,rows) =>{
          if(error){
              console.error('Error fetching novies from database:', error);
              reject(error);
          }else{
              const returnDB = rows.map( row => Conversion.convertClass(row,typeConversion))
              console.log(returnDB)
              resolve(returnDB)
          }
      })
  });
  }
}

module.exports = Database