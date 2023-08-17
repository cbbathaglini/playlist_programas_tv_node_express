const Movie = require('../model/Movie')
const Database = require('../config/database')

class MoviesDatabase{
    static typeClass = 'M'
    
    constructor() {
        this.db = new Database().createDatabaseConnection()
        //this.connection = this.db.createDatabaseConnection()
      } 

    async getAllMoviesDB(){

        try{
            console.log("10")
            const query = "SELECT * from filmes"
            this.db.executeDB(query,null,typeClass)
            //this.connection.endDatabaseConnection()
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
}

module.exports = MoviesDatabase