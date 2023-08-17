const Movie = require('../model/Movie')
const Database = require('../config/database')

class MoviesDatabase{
    constructor() {
        this.db = new Database().createDatabaseConnection()
      } 

    async getAllMoviesDB(){

        try{
        const query = "SELECT * from filmes"
        return new Promise((resolve, reject) => {
            this.db.query(query,(error,rows) =>{
                if(error){
                    console.error('Error fetching novies from database:', error);
                    reject(error);
                }else{
                    const movies = rows.map( row => new Movie(row.idFilme,row.nome,row.duracao,row.ano))
                    resolve(movies)
                }
            })
        });
        }catch(error){
            throw new Error('Error fetching movies from database:'+error)
        }
    }


    async getMovieByIdDB(id){

        try{
        const query = "SELECT * from filmes where idFilme = ?"
        return new Promise((resolve, reject) => {
            this.db.query(query,[id],(error,rows) =>{
                if(error){
                    console.error('Error fetching novies from database:', error);
                    reject(error);
                }else{
                    const movies = rows.map( row => new Movie(row.idFilme,row.nome,row.duracao,row.ano))
                    resolve(movies)
                }
            })
        });
        }catch(error){
            throw new Error('Error fetching movies from database:'+error)
        }
    }


    async insertMovieDB(movie){

        try{
        const query = "INSERT INTO filmes (nome, duracao, ano) VALUES  (?,?,?)"
        return new Promise((resolve, reject) => {
            this.db.query(query,[movie.nome,movie.duracao, movie.ano],(error,rows) =>{
                if(error){
                    console.error('Error fetching novies from database:', error);
                    reject(error);
                }else{
                    resolve(resolve.insertId)
                }
            })
        });
        }catch(error){
            throw new Error('Error fetching movies from database:'+error)
        }
    }

    

    async deleteMovieDB(movie){
        try{

            const query = 'DELETE FROM filmes WHERE idFilme = ?';
            return new Promise((resolve,reject) => {
                this.db.query(query,[movie.idFilme],(error, row) =>{
                    if(error){
                        throw new Error("Error deleting " +  error)
                        reject(error)
                    }else{
                       resolve(row.affectedRows) 
                    }
                })
            })
            

        }catch(error){
            throw new Error('Error deleting movie from database' + error)
        }

    }
}

module.exports = MoviesDatabase