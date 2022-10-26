const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const listEndpoints = require('express-list-endpoints')

//dependencias a las rutas
const bootcamproutes = require('./routes/BootcampRoutes')
const courseroutes = require('./routes/CoursesRoutes')
const usersroutes = require('./routes/UserRoutes')

//Definiendo archivo .env
dotenv.config({
    path: './config/config.env'
})

//2 crar el objeto aplicacion
const app = express()

//conectar a db
connectDB()

//relacion de rutas de dominio
app.use('/api/v1/bootcamps', bootcamproutes)
app.use('/api/v1/courses', courseroutes)
app.use('/api/v1/users', usersroutes)

//ruta de prueba
app.get('/', (request, response)=>{
    response.send('funciona')
})

//rutas para bootcamps

//3 iniciar el devserver
app.listen(process.env.PORT, ()=>{
    console.log("servidor iniciado".bgBlue)
})

//consultar endpoints del proyecto
console.log(listEndpoints(app))
