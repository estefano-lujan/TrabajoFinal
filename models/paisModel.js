const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const PaisModel = sequelizeConnection.define(
  'paises',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'nombre'
    },
  },
  {
    tableName: 'paises',
    timestamps: false
  }
)
module.exports = PaisModel
