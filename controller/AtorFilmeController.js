const { Filme, AtorFilme, Ator } = require('../models')
const Sequelize = require('sequelize')
const config = require('../config/database')

const AtorFilmeController = {
    index: async (req, res)=>{

        const atores = await AtorFilme.findAll()
        res.send(atores)
    },
    show: async (req,res) => {
        const {id} = req.params 

        const filmes = await AtorFilme.findOne({
            where: {
                id
            },
            include: [{
                model: Filme,
                as: 'infoFilme',
                required:true
            },{
                model: Ator,
                as: 'infoAtor',
                required:true
            }]
        })

        res.send(filmes)
    }
}

module.exports = AtorFilmeController