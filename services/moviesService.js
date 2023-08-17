
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


async function insertMovieService(movie){
    try{
        const moviesDB = await db.insertMovieDB(movie);
        return moviesDB
    }catch(error){

    }
}

async function deleteMovieService(movie){
    try{
        console.log(movie)
        await db.deleteMovieDB(movie)
    }catch(error){
        throw new Error('Error deleteMovieService')
    }

}

module.exports ={
    getAllMoviesService,
    getMovieByIdService,
    insertMovieService,
    deleteMovieService
}