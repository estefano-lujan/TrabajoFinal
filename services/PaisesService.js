const error = require("../common/error")
const exceptions = require("../common/exceptions")
const PaisModel= require('../models/paisModel')


const createPaises = async ({nombre,poblacion}) => {
    console.log("createPaises - nombre["+ nombre+"]");
    const data = {
        nombre:nombre,
        poblacion:poblacion
      }
      console.log("createPaises - data["+ JSON.stringify(data)+"]");
      try {
        return await PaisModel.create(data)
      } catch (e) {
        const errorMessage = `createPaises - Detail: ` + e.message
        console.error("createPaises - nombre["+ nombre+"]");
        throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeCreated, errorMessage)
      }
  }


const actualizarPais = async (id,{nombre,poblacion}) => {
    console.log("actualizarPais - id["+ id+"]");
    const data = {
        nombre:nombre,
        poblacion:poblacion
      }
      console.log("actualizarPais - data["+ JSON.stringify(data)+"]");
      try {
        return await PaisModel.updateById(id,data)
      } catch (e) {
        const errorMessage = `createactualizarPaisPaises - Detail: ` + e.message
        console.error("actualizarPais - nombre["+ nombre+"]");
        throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeUpdated, errorMessage)
      }
  }

const getAll = async ({nombre, poblacion}) =>{
    console.log("getAll - nombre["+nombre +"] - poblacion["+poblacion+"]");
    const whereFilter ={}
    const filterAtr = ['nombre']

    if(nombre){
        whereFilter.nombre = nombre
    }
    if(poblacion){
        whereFilter.poblacion = poblacion
    }
    console.log("getAll - whereFilter["+whereFilter +"]")

    const paises = await PaisModel.findAll({
        attributes: filterAtr,
        where: whereFilter
      });
    console.log("get user service "+paises)
    return paises;
}

const getById = async (paisId) =>{
    console.log("get by id service - paisId["+ paisId+"]");
    const pais = await PaisModel.findByPk(paisId, {
        attributes: [ 'nombre']
      });
    console.log("get user service "+pais)
    if(!pais){
        throw new error.AppError(exceptions.exceptionType.paises.notFound)
    }
    return pais;
}


module.exports = {
    createPaises,
    getAll,
    getById,
    actualizarPais
}