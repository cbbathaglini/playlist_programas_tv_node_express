const { Router } = require("express")
const router = Router()
const { getAllSeries,getSerieById,registrateSerie }= require("../../controllers/serieController")

router.get("/", getAllSeries)
router.get("/:id", getSerieById)
router.post("/", registrateSerie)

module.exports = router