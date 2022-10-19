const colors = require('colors')
const dotenv = require('dotenv')
const listEndpoints = require('express-list-endpoints')

//dependencias a las rutas
const bootcamproutes = require('./routes/BootcampRoutes')
const courseroutes = require('./routes/CoursesRoutes')

//Definiendo archivo .env
dotenv.config({
    path: './config/config.env'
})


//1 crear adependencia a express
const express = require('express')

//2 crar el objeto aplicacion
const app = express()

//relacion de rutas de dominio
app.use('/api/v1/bootcamps', bootcamproutes)
app.use('/api/v1/courses', courseroutes)

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
