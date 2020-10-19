module.exports = (sequelize, DataTypes) => {
    const Cardapio = sequelize.define('Cardapio',{
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        ingredientes: DataTypes.STRING,
        preco: DataTypes.FLOAT
    },{
        tableName:'cardapio',
        timestamps: false
    })
    return Cardapio;
}