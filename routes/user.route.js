const express = require('express')
const router = express.Router({ mergeParams: true })
const UserController = require("../controllers/user.controller")
const routeController = require("../common/route.controller")
const auth = require("../middlewares/auth")


router.get("/",(request,response)=>{
    console.log(request.query);
    routeController.handleRequest(request, response, UserController.getAll)
})

router.get('/:id',[auth.required],(request,response) => {
    console.log("get bt id route" +request.params);
    routeController.handleRequest(request, response, UserController.getById)
  });
  

module.exports = router