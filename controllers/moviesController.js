
const {getAllMoviesService,getMovieByIdService} = require('../services/moviesService')

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



module.exports = {
    getAllMovies,
    getMovieById
}