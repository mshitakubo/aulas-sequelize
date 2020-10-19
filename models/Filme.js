module.exports = (sequelize, DataTypes)=>{
   
    const Filme = sequelize.define('Filme', {
        titulo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        avaliacao: {
            type:DataTypes.DOUBLE,
            allowNull: false
        },
        premios:{ 
            type: DataTypes.INTEGER,
            unsigned: true
        },
        data_lancamento: {
            type:DataTypes.DATE,
            allowNull: false
        },
        duracao: {
            type:DataTypes.INTEGER,
            allowNull: false,
            unsigned: true
        },
        genero_id:{
            type:DataTypes.INTEGER,
            unsigned: true
            }
        },{
            tableName:'filmes',
            timestamps: false
    })

    Filme.associate = (listaDeModelos) => {
      
        Filme.hasMany(listaDeModelos.Ator, {
            foreignKey: 'filme_favorito_id', 
            as: 'atores'
        })

        Filme.belongsToMany(listaDeModelos.Ator, {
            foreignKey: 'ator_id',
            as: 'infoFilme',
            through: listaDeModelos.AtorFilme
        })
    }

    return Filme
}