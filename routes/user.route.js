const express = require('express')
const router = express.Router({ mergeParams: true })
const UserController = require("../controllers/user.controller")
const routeController = require("../route.controller")

router.get("/",(request,response)=>{
    console.log(request.query);
    routeController.handleRequest(request, response, UserController.getAll)
})

router.get('/:id',(request,response) => {
    console.log("get bt id route" +request.params);
    routeController.handleRequest(request, response, UserController.getById)
  });
  
  router.delete('/:id',(request,response) => {
    console.log(request.params);
    const params = request.params
    const userId = params.id
    response.send("delete by id")
  });
  
  router.patch('/:id',(request,response) => {
    console.log(request.params);
    const params = request.params
    const userId = params.id
    response.send("patch by id")
  });

   router.put('/:id',(request,response) => {
    console.log(request.params);
    const params = request.params
    const userId = params.id
    response.send("put by id")
  });
  
  router.post('/',(request,response) => {
    routeController.handleRequest(request, response, UserController.createUser)
  });

module.exports = router