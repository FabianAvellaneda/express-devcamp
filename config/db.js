const sequelize = require('./seq')
const colors = require('colors')

//crear instancia del nuevo usuario
//const User = UserModel(sequelize, DataTypes) 

//funcion para conectarme a la bd
const connectDB = async()=>{
    try {
        await sequelize.authenticate()
        console.log('Conectado a servidor mysql'.bgGreen)
        /*crear un usuario
        const pedro = await User.create({ username: "Pedro", email: "Doe@misena.edu.co", password: "123a" });
        console.log("Pedro tiene un id automatico el cual es:".bgBlue, pedro.id);
        //seleccionar un usuario
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("Todos los Usuarios:".bgBlue, JSON.stringify(users, null, 2));
        //actualizar un usuario
        await User.update({ username: "Mafe" }, {
            where: {
              username: "Fabian"
            }
        })
        //eliminar un usuario
        await User.destroy({
            where: {
              username: "Pedro"
            }
        })*/
    } catch (error) {
        console.log(error,'Error al conectarse a mysql'.bgRed) 
    }  
}

module.exports = connectDB