const express = require('express')
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");




dotenv.config({path:"./.env"});
require('./config/config');

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(require('./routes/auth'));

const articlesRouter = require("./routes/article");
app.use("/articles", articlesRouter);

app.get('/Login', (req,res) => {
  res.send(`hello contact me`)
})
app.get('/Registration405', (req,res) => {
  res.send(`hello contact me`)
})





const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
  });