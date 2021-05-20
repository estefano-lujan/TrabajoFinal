


const createUser = async (req,res) => {
    const data = req.body
    if(!data.name){
        res.status(400)
        return
    } 
    console.log("INIT CREATE USER  data:" + data)
    // const newUser = await userService.CreateUser(data)
    const newUser = data

    console.log(JSON.stringify(newUser))
    res.status(201).json(newUser)
}

module.exports = {
    createUser
}