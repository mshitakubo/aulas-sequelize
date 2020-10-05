const Sequelize = require('sequelize')
const config = require('../config/database')

const FilmesController = {
    index: async (req, res)=>{
        const db = new Sequelize(config)
        let idFilme = 10
        const result = await db.query('select * from filmes' , 
        {   
            replacements:{
                idFilme
            },
            type:Sequelize.QueryTypes.SELECT
        })

        res.send(result)
    }
}

module.exports = FilmesController