///////// importing express module

const express = require('express');
const app=express();
const port=process.env.PORT || '8000'
const host='localhost';
////////// importing router 

const user=require('./routes/user');

/// use the router

app.use('/user',user);
app.listen(port, host, ()=>{
    console.log(`http://${host}:${port}`);
})