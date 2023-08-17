class Filme{
    constructor(idFilme, nome, duracao,ano){
        this.idSerie = idFilme,
        this.nome = nome,
        this.duracao = duracao,
        this.ano = ano
    }


    static convertClass(row){
        return new Movie(row.idFilme,row.nome,row.duracao,row.ano)
    }

}

module.exports = Filme