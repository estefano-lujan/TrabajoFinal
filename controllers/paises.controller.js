const PaisService = require("../services/PaisesService")

const getAll = async (req,res) => {
    const query = req.query
    console.log("INIT GET USERs")
    const paises = await PaisService.getAll(query);
    console.log("response controller "+ JSON.stringify(paises))
    return res.status(200).json(paises)
}

const getById = async (req,res) => {
    console.log(req.params);
    const params = req.params
    const PaisId = params.id
    const Pais = await PaisService.getById(PaisId);
    console.log("response controller "+ JSON.stringify(Pais))
    return res.status(200).json(Pais)
}


const createPais = async (req,res) => {
    const data = req.body
}

module.exports = {
    createPais,
    getAll,
    getById,
    
}