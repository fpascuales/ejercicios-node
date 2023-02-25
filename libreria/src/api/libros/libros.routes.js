const { getAllLibros, getLibrosById, getLibrosByTitle } = require("./libros.controller")

//las rutas no pueden funcionar sin controladores. me traigo el router de express para poder gestionar mis rutas
const librosRoutes = require("express").Router()

//que cuando estemos en raiz, pille todos los libros. Aquí llegamos gracias al index.js utilizando el servidor para declarar la ruta principal que gestiona al resto de rutas que ya tenemos
librosRoutes.get("/", getAllLibros)
//declaro la ruta para que use el controlador que pilla los libros por id
librosRoutes.get("/:id", getLibrosById)
//declaro la ruta para que use el controlador que pilla los libros por título
librosRoutes.get("/getByTitle/:title", getLibrosByTitle)
//exportamos las rutas para que puedan ser utilizadas en el index.js
module.exports = librosRoutes