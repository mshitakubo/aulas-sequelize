const { Filme, Ator, AtorFilme } = require('../models')
const Sequelize = require('sequelize')
const config = require('../config/database')

const FilmesController = {
    index: async (req, res)=>{

        const db = new Sequelize(config)
        let idFilme = 10
        //row query
        const result = await db.query('select * from filmes' , 
        {   
            replacements:{
                idFilme
            },
            type:Sequelize.QueryTypes.SELECT,
        })

        res.send(result)
    },
    findById: async(req, res) => {
        let {id} = req.params
        const db = new Sequelize(config)
        
        const result = await db.query("select * from filmes where id = 10 ", 
        {   
            replacements:{
                id: id
            },
            type:Sequelize.QueryTypes.SELECT,
        })
        
        res.send(result)
    },
    premios: async (req, res) => {
        // COUNT , SUM, AVG, MAX,MIN
        //- O nome do filme com mais premios. 
        let filme = await Filme.max('premios')

        filme = await Filme.findOne({where: {premios: filme}})
        console.log(filme.titulo)
        
    },
    innerjoin: async (req, res) => {
        const {id} = req.params

        const filme = await Filme.findOne({
            where:{
                id
            },
            include:{
                model: Ator,
                as: 'atores',
                required: true
            }
        })
        console.log(filme)
        res.send(filme)
    },

    home: async (req, res) => {

        const filmes = await Filme.findAll()
        return res.render('filme/home', {filmes})
    }


}

module.exports = FilmesController