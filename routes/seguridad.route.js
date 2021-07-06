const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const UserController = require("../controllers/user.controller")

router.post('/singin', (req, res) => {
  routeController.handleRequest(req, res, UserController.login)
})

router.post('/singup', (req, res) => {
  routeController.handleRequest(req, res, UserController.createUser)
})


module.exports = router