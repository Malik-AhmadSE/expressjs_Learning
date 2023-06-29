///// importing the express module

const express = require('express');
const app=express();
const port =process.env.PORT|| '8000';
const host='localhost';
const cookieParser=require('cookie-parser');
const student=require('./routes/student');
app.use(cookieParser());
app.use('/',student);
app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`);
})