const express = require("express");
const router = express.Router();
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());

app.use("/users",require("./routes/user.route"))
app.use("/login",require("./routes/login.route"))

// add router in the Express app.
app.use("/", router);

app.listen(3000,() => {
  console.log("Started on PORT 3000");
})