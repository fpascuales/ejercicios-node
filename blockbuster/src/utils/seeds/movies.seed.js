const mongoose = require("mongoose")

const Movie = require("../../api/movies/movies.model")

require("dotenv").config()
const DB_URL = process.env.DB_URL

const movies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
]

mongoose.connect(DB_URL).then(async () => {
    const movies = await Movie.find()
    if(movies.length){
        await Movie.collection.drop()
        console.log("PELÍCULAS ELIMINADAS")
    }
}).catch((error) => console.log("Error al eliminar las películas de las bases de datos", error))
.then(async () => {
    await Movie.insertMany(movies)
    console.log(("PELÍCULAS INSERTADAS"))
})
.catch((error) => console.log("Error insertando las películas en la base de datos", error))
.finally(() => mongoose.disconnect())