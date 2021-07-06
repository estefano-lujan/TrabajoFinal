const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const {required} = require('../middlewares/auth')
const ProductosController = require("../controllers/productos.controller")

router.get('/',[required], (req, res) => {
  routeController.handleRequest(req, res, ProductosController.getAll)
})


router.get('/:id', [required],(req, res) => {
  routeController.handleRequest(req, res, ProductosController.getById)
})

router.post('/', (req, res) => {
  routeController.handleRequest(req, res, ProductosController.create)
})

router.patch('/:id', (req, res) => {
  routeController.handleRequest(req, res, ProductosController.actualizar)
})



module.exports = router