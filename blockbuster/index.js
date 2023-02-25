const express = require("express")
const server = express()

require("dotenv").config()
const cors = require("cors")

const PORT = process.env.PORT
server.use(cors())

const moviesRoutes = require("./src/api/movies/movies.routes.js")
server.use("/movies", moviesRoutes)

const db = require("./src/utils/db.js")
db.connectDB()

server.use("/", (req, res) => {
    res.send("Funcionando")
})

server.listen(PORT, () => {
    console.log("Server funcionando en http://localhost:" + PORT);
})
