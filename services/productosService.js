const productosModel = require("../models/productosModel")
const error = require("../common/error")
const exceptions = require("../common/exceptions")

const getAllService = async ( {nombre,estado}) => {
    console.log("getAllService - nombre"+nombre +" - estado: "+ estado)
    const where = {}
    if(estado){
        where.estado = estado;
    }
    if(nombre){
        where.nombre = nombre;
    }
    const productos = await productosModel.findAll({
        attributes: ['nombre', 'precio'],
        where: where

    })
    console.log("productos return : "+ productos)
    return productos
}

const getById = async ( id) => {
    console.log("getById - id: "+id)
    const producto = await productosModel.findByPk(id)
    if(!producto){
        throw new error.AppError(exceptions.exceptionType.productos.notFound)
    }
    console.log("productos return : "+ producto)
    return producto
}


const create = async (data) => {
    const {nombre,precio,categoria,estado } = data
    console.log("Crear producto:"+ JSON.stringify({nombre,precio,categoria,estado }));
    const producto = await productosModel.create({
        nombre,
        precio,
        categoria,
        estado
    })

    return producto.id;

}

const actualizar = async (id,data) => {
    const {nombre,precio,categoria,estado } = data
    console.log("actualizar producto:"+ JSON.stringify({nombre,precio,categoria,estado }));
    const producto = await productosModel.update({ estado}, {
        where: {
          id
        }
      });
      if(!producto){
          return false
      }
      return true
}


module.exports = {
    getAllService,
    getById,
    create,
    actualizar
}