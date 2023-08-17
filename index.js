const e = require("express")
const express = require("express")
const rotaSerie = require("./rota/serie/serie")

const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))
const port = 8011


app.use("/series", rotaSerie)


app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
} )