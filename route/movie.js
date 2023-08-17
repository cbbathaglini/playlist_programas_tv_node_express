const { Router } = require("express")
const router = Router()
const {getAllMovies, getMovieById} = require('../controllers/moviesController')

router.get('/',getAllMovies)
router.get('/:id',getMovieById)

module.exports = router