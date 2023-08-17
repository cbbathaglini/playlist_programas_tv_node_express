const fs = require("fs")
const { STATUS_CODES } = require("http")
const { getAllSeriesService,getSerieByIdService,registrateSerieService} = require("../services/serieService")
const Serie = require("../model/Serie")

async function getAllSeries(req,res) {
    try{
        const series = await getAllSeriesService()
        res.send(series)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}


async function getSerieById(req,res) {
    try{
        const series = await getSerieByIdService(req.params.id)
        res.send(series)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}


async function registrateSerie(req,res) {
    try{
       
        const serie = new Serie(null,req.body.nome,req.body.temporadas,req.body.ano)
        //console.log(serie)
        const newSerie = await registrateSerieService(serie)
        res.send(newSerie)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
   
}



module.exports = {
    getAllSeries,
    getSerieById,
    registrateSerie
}

