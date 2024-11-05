//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path:'./.env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    });
    app.on("error",(error)=>{
        console.log("Error:",error);
        throw error
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed: " + err);
    
})





/*
database connection first APPROACH
//IIFE
;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MIONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch(error){
        console.log("Error :",error)
        throw err
    }
})()

*/