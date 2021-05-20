const express = require('express')
const router = express.Router({ mergeParams: true })


router.post('/',(request,response) => {
  console.log(request.body);
  response.send("login")
});


module.exports = router