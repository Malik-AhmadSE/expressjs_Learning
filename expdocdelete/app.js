///// importing the express module

const express = require('express');
const app=express();
const port =process.env.PORT|| '8000';
const host='localhost';
const DATABASE_URL=process.env.DATABASE_URL||'mongodb://127.0.0.1:27017/my_database';
const connectDatabase=require('./db/connectdb');
const deleteData=require('./models/studentModel');
deleteData(20);

connectDatabase(DATABASE_URL);

app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`);
})