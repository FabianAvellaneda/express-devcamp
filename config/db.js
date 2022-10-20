const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017'

//crear componente funcional
const connectDB = async () =>{
    const conn = await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParse: true
    })
    console.log(conn.connection.host)
}

connectDB()