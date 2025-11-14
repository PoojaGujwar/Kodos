const {initializeData} = require('./db/db.connection')
const express = require('express')
const app = express()
const PORT = 3000
const User = require('./models/users.model')

console.log(User)
initializeData ()
app.use(express.json())

app.get("/",async(req,res)=>{
    try {
        const user = await User.find()
        res.status(201).json({message:"All user show successfully",user})
    } catch (error) {
        res.status(404).json({error:"Make, model and year are required."})
    }
})

app.listen(PORT,()=>{
    console.log(`Internal server is running on port ${PORT}`)
})


