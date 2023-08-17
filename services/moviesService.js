
const MoviesDatabase = require('../repository/MoviesDatabase')

const db = new MoviesDatabase()

async function getAllMoviesService(){
    try{
        const moviesDB = await db.getAllMoviesDB();
        return moviesDB
    }catch(error){

    }
}


async function getMovieByIdService(id){
    try{
        const moviesDB = await db.getMovieByIdDB(id);
        return moviesDB
    }catch(error){

    }
}



module.exports ={
    getAllMoviesService,
    getMovieByIdService
}