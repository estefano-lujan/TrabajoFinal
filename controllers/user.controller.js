const userService = require("../services/UserService")

const getAll = async (req,res) => {
    const query = req.query
    console.log("INIT GET USERs")
    const users = await userService.getAll(query);
    console.log("response controller "+ JSON.stringify(users))
    res.status(200).json(users)
}

const getById = async (req,res) => {
    console.log(req.params);
    const params = req.params
    const userId = params.id
    const user = await userService.getById(userId);
    console.log("response controller "+ JSON.stringify(user))
    if(!user){
        res.status(400)
    }else{
    res.status(200).json(user)
    }
}


const createUser = async (req,res) => {
    const data = req.body
    console.log("INIT CREATE USER  data:" + data)
    if(!data.username){
        console.log("no name in  CREATE USER  data:" + data)
        res.status(400)
    } else{
    const newUser = await userService.create(data);
    console.log(JSON.stringify(newUser))
    res.status(201).json(newUser)
    }
}

module.exports = {
    createUser,
    getAll,
    getById
}