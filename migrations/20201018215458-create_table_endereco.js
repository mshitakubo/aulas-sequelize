'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * return await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.createTable('endereco', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      endereco: Sequelize.STRING(300),
      numero: Sequelize.INTEGER,
      complemento:{
        allowNull:true,
        type: Sequelize.STRING
      },
      uf: Sequelize.STRING(2)
      // fk_ator:{
      //   type: Sequelize.INTEGER,
      //   references:{
      //     model:{
      //       tableName: 'atores'
      //     },
      //     key: 'id'
      //   }
      // }
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    return await queryInterface.dropTable('endereco');
     
  }
};
