module.exports = (sequelize, DataTypes) => {
    
    const Genero = sequelize.define('Genero',{
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        ranking: {
            type:DataTypes.INTEGER,
            unique: true,
            unsigned: true
        },
        ativo: {
            type:DataTypes.BOOLEAN
        }
    },{
        tableName:'generos',
        timestamps: false
    })
    
    return Genero;
}