const mongoose = require("mongoose")
const linkDB = process.env.DB_URL

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true)
        const db = await mongoose.connect(linkDB)
        console.log("conectado con éxito")
    } catch (error) {
        console.log(`No me puedo conectar a la BBDD comprueba el error este: ${error}`)
    }
}
module.exports = { connectDB }