const app=require('./app')
const dotenv=require("dotenv")
const { mongoose } = require('mongoose')

//config
dotenv.config({
    path:"config/.env"
})

//connect DB
const connectDB=async(req,res,next)=>{
    try {
        mongoose.set('strictQuery',false);
        const conn=mongoose.connect(process.env.MONGO_URI,{
            dbname:"BookManagementSystem",
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        console.log("Database Connection is ready")
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

connectDB()


//Create server
const server=app.listen(process.env.PORT,()=>{
    console.log(`Server run on port http://localhost:${process.env.PORT}`)
})