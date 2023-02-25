// aquí es donde vamos a inciar nuestro servidor -> EXPRESS
const express = require("express");

// vamos a traernos la librería dotenv y la vamos a "configurar"
require("dotenv").config();

// usando el .env con process.env.elNombreVariable y previamente he configurado dotenv
const PORT = process.env.PORT; // recomiendo 8000, 8080 y 3000.

// para crear el servidor necesitamos ejecutar la librería express
const server = express();

//nos traemos el router de express que cuando lo ejecutamos y lo guardamos en una variable nos da la capacidad de 

// utilizamos el servidor en el endpoint /movies para devolver una respuesta con una películas que acabamos de generar a mano.
server.use("/movies", (req, res) => {

    const movies = [

        {
            title: "Titanic",
            cover: "https://lkasdjflasdf",
            duration: 3000
        },
        {
            title: "Avatar",
            cover: "https://lkasdjflasdf",
            duration: 30000
        },
        {
            title: "La historia interminable",
            cover: "https://lkasdjflasdf",
            duration: "infinita"
        }
    
    ]

    // devuelvo en la respuesta nuestra variable movies
    res.json(movies);

})

// aquí indico que mi servidor use la barra principal para enviar una respuesta. (la ruta barra va a ir declarada siempre al final)
server.use("/", (req, res) => {

    res.send("Esto funciona guay, entra en /movies para ver las peliculas")

})

// el servidor tiene varias funciones, se puede "usar" (server.use()), se puede poner a "escuchar" (server.listen());
server.listen(PORT, () => {
    console.log("El servidor está levantado en la ruta: http://localhost:" + PORT);
});