const fs = require('fs')
const TVSeriesDatabase = require('../repository/TVSeriesDatabase')
const Serie = require('../model/Filme')
const db = new TVSeriesDatabase();

async function getAllSeriesService(){
  try{
    const series = await db.getAllSeriesDB()
    return series
  }catch(error){
      
  }
}


async function getSerieByIdService(id){
  try{
    const serie = await db.getSerieByIdDB(id)
    return serie
  }catch(error){
      
  }
}

async function registrateSerieService(newSerie){
  try{
    const serie = await db.registrateSerieDB(newSerie)
    return serie
  }catch(error){
      
  }
}




module.exports = {
  getAllSeriesService,
  getSerieByIdService,
  registrateSerieService
}
