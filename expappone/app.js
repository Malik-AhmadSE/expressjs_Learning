///////// first import express js /////////

const express=require('express')
const app=express();

const PORT=process.env.PORT || '8000';
const HOST='localhost';
app.get('/',(req,res)=>{
    res.send('hello world');
})


app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
})
