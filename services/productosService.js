const productosModel = require("../models/productos")

const getAllService =( {nombre,estado}) => {
    console.log("getAllService - nombre"+nombre +" - estado: "+ estado)
    const productos = productosModel.find({nombre,estado})
    console.log("productos return : "+ productos)
    return productos
}

const getById =( id) => {
    console.log("getById - id: "+id)
    const producto = productosModel.findById(id)
    console.log("productos return : "+ producto)
    return producto
}


module.exports = {getAllService,
    getById}