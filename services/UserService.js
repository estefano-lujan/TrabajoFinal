const error = require("../common/error")
const exceptions = require("../common/exceptions")
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
// const logger = require('../config/server/logger')(__filename)



const createUser = async ({userName, password}) => {
    // logger.info(`createUser - userName[${userName}]`)
    console.log("createUser - userName["+ userName+"]");
    userName = userName.toLowerCase()
    password = encryptPassword(password)
    try {
      return await UserModel.create({ userName, password })
    } catch (e) {
      const errorMessage = `Create User - Detail: ` + e.message
      // logger.error(errorMessage)
      console.error("createUser - userName["+ userName+"]");
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeCreated, errorMessage)
    }
  }

  const encryptPassword = userPassword => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(userPassword, salt)
  }

const getAll = async (query) =>{
    console.log("getAll - query["+ JSON.stringify(query)+"]");
    const users = await UserModel.findAll();
    console.log("get user service "+users)
    return users;
}

const getById = async (userId) =>{
    console.log("get by id - userId["+ userId+"]");
    const user = await UserModel.findByPk(userId);
    console.log("get user service "+user)
    if(!user){
        throw new error.AppError(exceptions.exceptionType.users.notFound)
    }
    return user;
}


module.exports = {
    createUser,
    getAll,
    getById
}