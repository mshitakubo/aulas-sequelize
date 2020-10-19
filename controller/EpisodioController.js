const { Episodio } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const EpisodioController = {
    index: async (req, res)=> {
        let episodios = await Episodio.findAll({
            order:[
                ['titulo', 'ASC']
            ],
            limit: 100,
            offset: 0
        })
        res.send(episodios)
    },
    total: async (req, res) => {
        // COUNT , SUM, AVG, MAX,MIN
        // O total de epsodios que temos no banco
        let total = await Episodio.count('id')
        res.send('O total de episódios: ' + total)
    },
    media: async (req, res) => {
        // A nota média dada dos epsódios cadastrados
        let media = await Episodio.avg('avaliacao')
        console.log(media)
    }
}

module.exports = EpisodioController