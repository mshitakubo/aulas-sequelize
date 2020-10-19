module.exports = (sequelize, DataTypes)=>{
    
    const AtorFilme = sequelize.define('AtorFilme', {
        ator_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        filme_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        tableName:'ator_filme',
        timestamps: false
    })
    

    AtorFilme.associate = (listaDeModelos) => {
        
        AtorFilme.hasMany(listaDeModelos.Filme, {
            foreignKey: 'id',
            as: 'infoFilme'
        })
       
        AtorFilme.hasMany(listaDeModelos.Ator, {
            foreignKey: 'id',
            as: 'infoAtor'
        })

    }

    return AtorFilme
}