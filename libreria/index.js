const express = require("express")

const server = express()

//me traigo la librería dotenv para poder leer las variables que tenga mi .env
require("dotenv").config()

//requiero las CORS para permitir o denegar accesos a mi backend

const cors = require("cors")

//creo la variable PORT y le doy el valor de la variable PORT que está en mi .env accediendo a ella mediante process.env.NOMBREVARIABLE
//LOS CAMBIOS EN EL .ENV NO LOS CONTROLA NODEMON

const PUERTO = process.env.PORT

//necesito utilizar las CORS para permitir acceso
server.use(cors())

//importo las rutas de mis controladores
const librosRoutes = require("./src/api/libros/libros.routes.js")
//ruta que usa mi servidor 
server.use("/libros", librosRoutes) 

//me traigo mi BBDD
const db = require("./src/utils/db.js")

//estoy ejecuando la función connectDB de mi archivo db.js

db.connectDB()

//función que ejecuta mi server para utilziar una ruta para mostrar algo o enrutar de otra manera
server.use("/", (req, res) => {
    res.send("Funcionando")
})

//poner el server a escuchar con un puerto y su arrow function
server.listen(PUERTO, () => {
    console.log("Server funcionando en http://localhost:" + PUERTO);
})