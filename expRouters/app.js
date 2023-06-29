/////////// importing express module 

const express = require('express');

const app=express();
const port =process.env.PORT || '8000';
const host ='localhost';

//////// import the router of user

const user =require('./routes/user');


app.use('/user',user);

/////////////listening app

app.listen(port,host,()=>{
    console.log(`http://localhost:${port}`);
})
