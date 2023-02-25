const Movie = require("./movies.model")

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        return res.json(movies)
    } catch (error) {
        return res.json("Error al recoger las películas", error)
    }
}
const getMovieById = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)
        if(!movie){
            return res.json("No se encuentra la película, ese id no existe")
        }
        return res.json(movie)
    } catch (error) {
        return res.json({mensaje: "Error al recoger las películas", error: error})
    }
}
const getMovieByTitle = async (req, res) => {
    try {
        const { title } = req.params
        const movie = await Movie.findOne({title: title})
        if(!movie){
            return res.json("No se encuentra la película, ese título no existe")
        }
        return res.json(movie)
    } catch (error) {
        return res.json({mensaje: "Error al recoger las películas", error: error})
    }
}
const getMoviesByDirector = async (req, res) => {
    try {
        const { director } = req.params
        const movie = await Movie.find({director: director})
        if(!movie){
            return res.json("No se encuentran la películas, ese director no existe")
        }
        return res.json(movie)
    } catch (error) {
        return res.json({mensaje: "Error al recoger las películas", error: error})
    }
}
const getMoviesByYear = async (req, res) => {
    try {
        const { year } = req.params
        const movie = await Movie.find({year: year})
        if(!movie){
            return res.json("No se encuentran la películas, ese año no existe")
        }
        return res.json(movie)
    } catch (error) {
        return res.json({mensaje: "Error al recoger las películas", error: error})
    }
}
const getMoviesByGenre = async (req, res) => {
    try {
        const { genre } = req.params
        const movie = await Movie.find({genre: genre})
        if(!movie){
            return res.json("No se encuentran la películas, ese género no existe")
        }
        return res.json(movie)
    } catch (error) {
        return res.json({mensaje: "Error al recoger las películas", error: error})
    }
}
const getMovieByParameter = async (req, res) => {
    try {
        const { parameter } = req.params
        const movie = await Movie.find({parameter})
        return res.json(movie)
    } catch (error) {
        return res.json({mensaje: "Error al recoger las películas", error: error})
    }
}
const getMoviesPostYear = async (req, res) => {
    try {
        const { year } = req.params
        const movie = await Movie.find({year: {$gt:year}})
        if(!movie){
            return res.json("No se encuentran la películas, ese año no existe")
        }
        return res.json(movie)
    } catch (error) {
        return res.json({mensaje: "Error al recoger las películas", error: error})
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    getMovieByTitle,
    getMoviesByDirector,
    getMoviesByYear,
    getMoviesByGenre,
    getMovieByParameter,
    getMoviesPostYear
}