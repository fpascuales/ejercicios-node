const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        director: {type: String},
        year: {type: Number},
        genre: {type: String}
    },
    {
        timestamps: true,
        collection: "movies"
    }
)

const Movie = mongoose.model("movies", movieSchema)
module.exports = Movie