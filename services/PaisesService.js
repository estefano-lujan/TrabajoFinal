const error = require("../common/error")
const exceptions = require("../common/exceptions")
const PaisModel= require('../models/paisModel')
const config = require("config")
// const logger = require('../config/server/logger')(__filename)



const createPaises = async ({userName, password}) => {
    // logger.info(`createUser - userName[${userName}]`)
    console.log("createUser - userName["+ userName+"]");
    const data = {
    }
  }

const getAll = async (query) =>{
    console.log("getAll - query["+ JSON.stringify(query)+"]");
    const paises = await PaisModel.findAll();
    console.log("get user service "+paises)
    return paises;
}

const getById = async (paisId) =>{
    console.log("get by id - paisId["+ paisId+"]");
    const pais = await PaisModel.findByPk(paisId);
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
}