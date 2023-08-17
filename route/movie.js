const { Router } = require("express")
const router = Router()
const {getAllMovies, getMovieById, insertMovie, deleteMovie} = require('../controllers/moviesController')

router.get('/',getAllMovies)
router.get('/:id',getMovieById)

router.post('/',insertMovie)
router.delete('/:id',deleteMovie)

module.exports = router