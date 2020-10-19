module.exports = (sequelize, DataTypes)=>{
    
    const Episodio = sequelize.define('Episodio', {
        avaliacao: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        data_lancamento:{
            type: DataTypes.DATE,
            allowNull: false
        },
        numero: {
            type: DataTypes.INTEGER,
            unsigned: true
        },
        temporada_id:{
            type: DataTypes.INTEGER,
            unsigned: true
        },
        titulo:{
            type: DataTypes.STRING
        }
    },{
        timestamps: false
    })
    
    return Episodio
}