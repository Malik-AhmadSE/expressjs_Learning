const express=require('express');
const app=express();
const port =process.env.PORT || '8000';
const host='localhost';
const DATABASE_URL=process.env.DATABASE_URL||'mongodb://127.0.0.1:27017';
const connectdatabase=require('./db/connectdb');
const studentDoc=require('./models/student');
connectdatabase(DATABASE_URL);
studentDoc('hussain',22);
app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`);
})