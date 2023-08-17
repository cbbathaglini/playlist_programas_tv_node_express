const MoviesDatabase = require("../repository/MoviesDatabase")
const Movie = require("../model/Movie")

class Conversion{
    static convertClass(row,typeClass) {
        if(typeClass == MoviesDatabase.typeClass){
            return Movie.convertClass(row)
        }
    }
}

module.exports = Conversion