const fs = require('fs')
const {startConnection,stopConnection} = require('../config/database')
const Serie = require('../model/Filme')

class TVSeriesDatabase {

  constructor() {
    this.db = startConnection(); // Set up your database connection
  } 

  async getAllSeriesDB(){
    const query = "SELECT * FROM series"
    try{

      return new Promise((resolve, reject) => {
        this.db.query(query, (error, rows) => {
            if (error) {
                console.error('Error fetching TV series from database:', error);
                reject(error);
            } else {
                const tvSeriesList = rows.map(row => new Serie(row.idSerie, row.nome, row.temporadas, row.ano));
                resolve(tvSeriesList);
            }
        });
    });

    }catch(error){
      throw new Error('Error fetching TV series from database:'+error)
    }
  }


  async getSerieByIdDB(id){
    const query = "SELECT * FROM series where idSerie=?"
    try{

      return new Promise((resolve, reject) => {
        this.db.query(query, [id],(error, rows) => {
            if (error) {
                console.error('Error fetching TV series from database:', error);
                reject(error);
            } else {
                const tvSerie= rows.map(row => new Serie(row.idSerie, row.nome, row.temporadas, row.ano));
                resolve(tvSerie);
            }
        });
    });

    }catch(error){
      throw new Error('Error fetching TV series from database:'+error)
    }
  }


  async registrateSerieDB(newSerie){
    const query = "INSERT INTO series (nome, temporadas, ano)  values (?,?,?)"
    try{

      return new Promise((resolve, reject) => {
        this.db.query(query, [newSerie.nome,newSerie.temporadas,newSerie.ano],(error, rows) => {
            if (error) {
                console.error('Error fetching TV series from database:', error);
                reject(error);
            } else {
                //const tvSerie= rows.map(row => new Serie(row.idSerie, row.nome, row.temporadas, row.ano));
                resolve(resolve.insertId);
            }
        });
    });

    }catch(error){
      throw new Error('Error fetching TV series from database:'+error)
    }
  }
  
}

module.exports = TVSeriesDatabase;