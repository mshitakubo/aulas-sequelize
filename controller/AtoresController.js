const { Ator } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const AtoresController = {
    index: async (req, res)=> {
        let atores = await Ator.findAll({
            order:[
                ['nome', 'ASC']
            ],
            limit: 5,
            offset: 10
        })
        res.send(atores)
    },
    findById: async(req, res) => {
        let {id} = req.params

        let ator = await Ator.findOne({
            where: {
                id: id
            }
        })
        res.send(ator.dataValues)
    },
    search: async (req, res)=>{
        let {key} = req.params
        let ator = await Ator.findAll({
            where:{
                nome:{
                    [Op.like]: `%${key}%`
                }
            }
        })
        res.send(ator[0].dataValues)
    },
    agregadores: async (req, res) => {
        let total = await Ator.sum('id')

        res.send('O max id é o de valor: ' + total)
    }
}

module.exports = AtoresController