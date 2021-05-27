const userRepository = require("../repositories/userRepository")
const error = require("../common/error")
const exceptions = require("../common/exceptions")

const create = async ({username,password}) => {
    console.log("create - username["+ username+"]");
    const user = {
        id: 3,
        username,
        password
    }
    const newUser = await userRepository.create(user);

    return newUser
}

const getAll = async (query) =>{
    console.log("getAll - query["+ JSON.stringify(query)+"]");
    const users = await userRepository.get();
    console.log("get user service "+users)
    return users;
}

const getById = async (userId) =>{
    console.log("get by id - userId["+ userId+"]");
    const user = await userRepository.getById(userId);
    console.log("get user service "+user)
    if(!user){
        throw new error.AppError(exceptions.exceptionType.users.notFound)
    }
    return user;
}


module.exports = {
    create,
    getAll,
    getById
}