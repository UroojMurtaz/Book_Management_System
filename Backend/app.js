const express=require ("express")
const app=express()
var cors = require('cors');

app.use(express.json());
app.use(
    express.urlencoded({ extended: false })
);
    
app.use(cors())

//Route import
const book=require('./routes/Bookroutes')


app.use("/api",(req,res,next)=>{console.log("/api");next()},book)

module.exports=app