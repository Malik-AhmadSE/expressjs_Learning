const express = require('express');
const app=express();
const port =process.env.PORT || '8000';
const host='localhost';
const homeroute=require('./routes/homeroute');
app.use(express.static('public'));
app.use('/',homeroute)

app.listen(port, host,()=>{
    console.log(`http://${host}:${port}`);
})