//puedo declarar los controladores, sin tener la información de la ruta
//no nos traemos mongoose, porque el Schema ya lo tiene
//me traigo el Schema para saber si tengo libros
const Libro = require("./libros.model")

//todos los controladores que creemos tendrán un try catch
const getAllLibros = async (req, res) => {
    try {
        const libros = await Libro.find()   //intento traer de mi bbdd todos los libros
        return res.json(libros)
    } catch (error) {
        return res.json("Error al recoger todos los libros", error)
    }
}
const getLibrosById = async (req, res) => {
    try {
        const { id } = req.params //hago object destructuring y me quedo con el id del libro
        const libro = await Libro.findById(id)
        if(!libro){
            return res.json("No he podido encontrar el libro, ese id no existe")
        }
        return res.json(libro)
    } catch (error) {
        return res.json({mensaje: "Error al recoger el libro", error: error})
    }
}
const getLibrosByTitle = async (req, res) => {
    try {
        const { title } = req.params //hago destructuring para pillar el título del libro
        const libro = await Libro.findOne({title: title})   //el primer title es la propiedad y el segundo, la variable
        if(!libro){
            return res.json("No he podido encontrar el libro, ese id no existe")
        }
        return res.json(libro)
    } catch (error) {
        return res.json({mensaje: "Error al recoger el libro", error: error})
    }
}
//exportamos todas las funciones creadas
module.exports = {
    getAllLibros,
    getLibrosById,
    getLibrosByTitle
}