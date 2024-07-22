require("dotenv").config()
const express = require('express')

const app = express()
const PORT = 8000 || process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello guys")
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))