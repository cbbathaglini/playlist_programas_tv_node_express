
const {getAllMoviesService,getMovieByIdService,insertMovieService,deleteMovieService} = require('../services/moviesService')
const Movie= require('../model/Movie')

async function getAllMovies(req,res){
    try{
        const movies = await getAllMoviesService()
        res.send(movies)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}


async function getMovieById(req,res){
    try{
        const movies = await getMovieByIdService(req.params.id)
        res.send(movies)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}


async function insertMovie(req,res){
    try{
        const movie_obj = new Movie(null,req.body.nome,req.body.duracao,req.body.ano)
        const movies = await insertMovieService(movie_obj)
        res.send(movies)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

async function deleteMovie(req,res){
    try{
        const movie = new Movie( parseInt(req.params.id))
        console.log(movie)
        await deleteMovieService(movie)
        res.status = 200
        res.send("Deletado")
    }catch(error){
        throw new Error('Error deleteMovie')
    }

}

module.exports = {
    getAllMovies,
    getMovieById,
    insertMovie,
    deleteMovie
}