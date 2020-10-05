module.exports = (sequelize, DataType)=>{
   
    const Ator = sequelize.define('Ator', {
        nome:DataType.STRING,
        sobrenome: DataType.STRING,
        avaliacao: DataType.DOUBLE,
        filme_favorito_id: DataType.INTEGER
    },{
        tableName:'atores',
        timestamps: false
    })

    return Ator
}