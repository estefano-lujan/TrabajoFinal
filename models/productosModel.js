const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')
const constants = require("../common/constants")

const ProductosModel = sequelizeConnection.define(
  'productos',
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
      precio: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'precio'
    },
    categoria: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'categoria'
    },
    estado: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'estado',
      defaultValue: constants.estado.ACTIVO
    },
  },
  {
    tableName: 'productos',
    timestamps: false
  }
)
module.exports = ProductosModel
