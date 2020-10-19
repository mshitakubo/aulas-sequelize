const { Ator, Filme } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const AtoresController = {
    index: async (req, res)=> {
        let atores = await Ator.findAll({
            order:[
                ['nome', 'ASC']
            ],
            limit: 100,
            offset: 0
        })
        res.send(atores)
    },
    innerjoin: async (req, res) => {
        const atores = await Ator.findAll({
            include:{
                model: Filme,
                as: 'filme_favorito',
                required: true
            }
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
        // COUNT , SUM, AVG, MAX,MIN
        let total = await Ator.count('id')
        
        res.send('O total de atores: ' + total)
    },
    total: async (req, res) => {
        // COUNT , SUM, AVG, MAX,MIN
        // - o total de atores do banco.
        let total = await Ator.count('id')
        res.send('O total de atores: ' + total)
    },
    cadastro: (req, res) => {
       return res.render('cadastroAtor')
    },
    salvar: async (req, res) => {
        const {nome, sobrenome, avaliacao, filme_favorito_id} = req.body

       const resultado = await Ator.create({
            nome,
            sobrenome,
            avaliacao,
            filme_favorito_id
        })
        console.log(resultado)
        res.send('Cadastro realizado com Sucesso!')
    },
    bulkCreate: async (req, res)=> {
        const listaDeAtores = [
            {nome: "Teste1", sobrenome: "Teste1", avaliacao: 9.0, filme_favorito_id: 8},
            {nome: "Teste2", sobrenome: "Teste2", avaliacao: 5.0, filme_favorito_id: 4},
            {nome: "Teste3", sobrenome: "Teste3", avaliacao: 9.5, filme_favorito_id: 8},
            {nome: "Teste4", sobrenome: "Teste4", avaliacao: 9.7, filme_favorito_id: 3}
        ]

        const resultado =  await Ator.bulkCreate(listaDeAtores)
        console.log(resultado)
        res.send('Criou em lote')
    },
    edit: async (req, res) => {
        let { id } = req.params
        const ator = await Ator.findByPk(id)
        return res.render('editar', {ator})
    },
    update: async (req, res)=> {
        const {id} = req.params
        const {nome, sobrenome, avaliacao, filme_favorito_id} = req.body

        const resultado = await Ator.update({
            nome,
            sobrenome,
            avaliacao,
            filme_favorito_id
        },
        {
            where:{
                id
            }
        })

        console.log(resultado)
        res.send('Sucesso!')

    },
    delete: async (req, res) => {
        const {id} = req.params

        const resultado = await Ator.destroy({
            where: {
                id
            }
        })

        console.log(resultado)
        res.send('Deletado com sucesso!')
    }
}

module.exports = AtoresController