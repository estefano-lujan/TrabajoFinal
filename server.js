const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.get('/',function(req,res){
    res.sendfile("index.html");
  });


  router.post('/login',function(req,res){
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
  });


 // add router in the Express app.
app.use("/", router);


app.listen(3000,() => {
    console.log("Started on PORT 3000");
  })