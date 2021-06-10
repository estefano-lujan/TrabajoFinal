const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const PaisesController = require("../controllers/paises.controller")

router.get('/', (request, response) => {
  routeController.handleRequest(request, response,PaisesController.getAll)

  //response.send("get de servicio de paises funcionando")
})

module.exports = router