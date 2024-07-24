require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser');
const expressLayout = require("express-ejs-layouts")


const app = express()
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"))
app.use(expressLayout)

app.set("layout", "./layouts/main")
app.set("view engine", "ejs")


app.use("/", require("./server/routes/main.js"))

app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`))

