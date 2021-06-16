const ProductService = require("../services/productosService")
const exceptions = require("../common/exceptions")
const error = require("../common/error")

const getAll = (req,res)=>{
    const query = req.query
    console.log("get all controller - query : "+JSON.stringify(query))
    if(!req.query.estado){
        throw new error.AppError(exceptions.exceptionType.productos.badRequest,"debe colocar un estado")
    }
    const filter = {
        estado: req.query.estado
    }
    if(req.query.nombre){
        filter.nombre = nombre
    }
    //llamar al servicio de productos
    const productos = ProductService.getAllService(filter)
    res.status(200).json(productos)
}

const getById = (req,res)=>{
    const params = req.params
    console.log("get all controller - params : "+JSON.stringify(params))
    const id = params.id
    //llamar al servicio de productos
    const producto = ProductService.getById(id)
    res.status(200).json(producto)
}

module.exports = {getAll,
    getById}