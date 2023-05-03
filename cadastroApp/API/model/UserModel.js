const mongoose = require('mongoose')

//Modelo usado p/criar um esquema relacional
//itens: username, password, name e city
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    }
}) 

module.exports = mongoose.model('User',userSchema)