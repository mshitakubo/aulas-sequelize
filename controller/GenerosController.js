const { Genero } = require('../models')
const Sequelize = require('sequelize')
const config = require('../config/database')

const GenerosController = {
    
    index: async (req, res)=>{
       
        const genero = await Genero.findAll()
        return res.render('genero/home', {genero})
    },
    criar: (req, res) => {
        return res. render('genero/cadastro')
    },
    salvar: async (req, res) => {
        const {nome, ranking, ativo} = req.body
        
        const genero = await Genero.create({
            nome,
            ranking,
            ativo
        })

        const result = await Genero.findAll()
        return res.render('genero/home', {genero: result})
    },

    edit: async (req, res) =>{
        const {id} = req.params

        const genero = await Genero.findByPk(id)
        res.render('genero/edit', {genero})

    },

    atualizar: async (req, res)=>{
        // Pegar os dados da requisição
        // Jogar os dados no banco
        // Redirecionar

        const {id} = req.params
        const dados = req.body

        const result = await Genero.update(dados, {
            where: {
                id
            }
        })
        console.log(result)
        return res.redirect('/generos')
    },
    
    delete: async (req, res) =>{
        const {id} = req.params

        const resultado = await Genero.destroy({
            where: {
                id
            }
        })

        return res.redirect('/generos')
    }
}

module.exports = GenerosController