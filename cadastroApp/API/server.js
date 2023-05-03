require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection

//conecta ao banco de dados
db.on('error', (error) => console.error(error))
db.once('connected', ()=> console.log('Conectado ao banco de dados'))

//middleware
app.use(express.json())
app.use(cors())

//rotas do usuario, config está em routes/users
const usersRoutes = require('./routes/users')
app.use('/users',usersRoutes)

app.listen(3000, ()=> console.log("Server iniciado"))
