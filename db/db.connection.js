const mongoose = require('mongoose')
require("dotenv").config()
const mongoURI = process.env.MONGODB

const initializeData = async()=>{
    await mongoose.connect(mongoURI).then(()=>console.log("Connected to Database")).catch((error)=>console.error("Error while connecting to db",error))
}
module.exports = {initializeData}