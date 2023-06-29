const express = require('express');
const app= express();

const home=require('./routes/homeRoute.js');
const about=require('./routes/aboutRoute.js');

const port=process.env.PORT || '8000';
const host='localhost';


app.use('/',[home,about]);

app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`);
})
