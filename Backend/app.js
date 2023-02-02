const express=require ("express")
const app=express()

app.use(express.json());
app.use(
    express.urlencoded({ extended: false })
);
    


//Route import
const book=require('./routes/Bookroutes')


app.use("/api",(req,res,next)=>{console.log("/api");next()},book)

module.exports=app