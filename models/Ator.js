module.exports = (sequelize, DataType)=>{
   
    const Ator = sequelize.define('Ator', {
        nome:{
            type:DataType.STRING,
            allowNull: false
        },
        sobrenome:{
            type:DataType.STRING,
            allowNull: false
        },
        avaliacao:{
            type: DataType.FLOAT
        },
        filme_favorito_id:{
            type: DataType.INTEGER,
            unsigned: true
        }
    },{
        tableName:'atores',
        timestamps: false
    })

    Ator.associate = (listaDeModelos) => {
        
        Ator.belongsTo(listaDeModelos.Filme, {
            foreignKey: 'filme_favorito_id',
            as: 'filme_favorito'
        })

        Ator.belongsToMany(listaDeModelos.Filme, {
            foreignKey: 'filme_id',
            as: 'infoAtor',
            through: listaDeModelos.AtorFilme
        })

    }
    

    return Ator
}