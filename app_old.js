const express = require("express");
const router = express.Router();
const app = express();

var methodOverride = require('method-override')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(methodOverride())

//Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/handle/:id',(request,response) => {
    //code to perform particular action.
    //To access GET variable use req.query() and req.params() methods.
    console.log(request.params);
    response.send("get")
});

router.get('/handle',(request,response) => {
    //code to perform particular action.
    //To access GET variable use req.query() and req.params() methods.
    console.log(request.query);
    response.send("get")
});

router.post('/handle',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
    response.send("post")
});

router.post('/error',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
    var data = request.body
    console.log(data);
    var error = data.algoquenoexiste
    console.log(algo);
    response.send("post")
});

// add router in the Express app.
app.use("/", router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.listen(3000,() => {
    console.log("Started on PORT 3000");
  })