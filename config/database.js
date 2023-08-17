const mysql = require('mysql'); // Replace with your preferred database library

function createDatabaseConnection() {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "playlists_nodejs"
    });

    connection.connect();

    console.log("connected")

    return connection;
}

function endDatabaseConnection(conn) {
  conn.end(err => {
    if (err) {
        console.error('Error closing database connection:', err);
    } else {
        console.log('Database connection closed');
    }
});
}

//createDatabaseConnection()

module.exports = {
  startConnection: createDatabaseConnection,
  stopConnection :  endDatabaseConnection
};



/*var mysql = require('mysql');


function databaseConn(req,res){
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "playlists_nodejs"
    });
    return con;
}

function query(con,query){
  con.query(query, function (err, result, fields) {
    if (err) throw err;
    return result;
  });
}

module.exports = {
    databaseConn,
    query
}




/*
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT nome, ano FROM filmes", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      console.log(result[0]);
    });

  });
*/

