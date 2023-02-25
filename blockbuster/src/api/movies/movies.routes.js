const { getAllMovies, getMovieById, getMovieByTitle, getMovieByParameter, getMoviesByGenre, getMoviesByYear, getMoviesByDirector, getMoviesPostYear } = require("./movies.controller")

const moviesRoutes = require("express").Router()

moviesRoutes.get("/", getAllMovies)
moviesRoutes.get("/:id", getMovieById)
moviesRoutes.get("/moviesByTitle/:title", getMovieByTitle)
moviesRoutes.get("/moviesByDirector/:director", getMoviesByDirector)
moviesRoutes.get("/moviesByYear/:year", getMoviesByYear)
moviesRoutes.get("/moviesByGenre/:genre", getMoviesByGenre)
moviesRoutes.get("/moviesByParameter/:parameter", getMovieByParameter)
moviesRoutes.get("/moviesPostYear/:year", getMoviesPostYear)

module.exports = moviesRoutes