const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Database=process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017';
const port=process.eventNames.PORT||'8000';
const host ='localhost';
const connectdb=require('./db/connectdb');

///// connection with database 

connectdb(Database);

app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`);
})
