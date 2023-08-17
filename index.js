const e = require("express")
const express = require("express")
const routeSerie = require("./route/serie")
const routeMovie = require("./route/movie")

const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))
const port = 8011


app.use("/series", routeSerie)
app.use("/movies", routeMovie)


app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
} )