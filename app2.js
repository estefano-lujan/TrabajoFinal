const express = require("express");
const router = express.Router();
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());


router.get('/users/:id',(request,response) => {
  console.log(request.params);
  const params = request.params
  const userId = params.id
  response.send("get by id")
});

router.get('/users',(request,response) => {
  console.log(request.query);
  response.send("get all")
});

router.delete('/users/:id',(request,response) => {
  console.log(request.params);
  const params = request.params
  const userId = params.id
  response.send("delete by id")
});

router.patch('/users/:id',(request,response) => {
  console.log(request.params);
  const params = request.params
  const userId = params.id

  response.send("patch by id")
});


router.post('/users',(request,response) => {
  const userData = request.body
  console.log(userData)
  response.send("post")
});

router.post('/login',(request,response) => {
  console.log(request.body);
  response.send("post")
});


// add router in the Express app.
app.use("/", router);

app.listen(3000,() => {
  console.log("Started on PORT 3000");
})