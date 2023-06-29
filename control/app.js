const express=require('express');
const app=express();
const port =process.env.PORT || '8000';
const host ='localhost';
const user=require('./routes/user');
app.use('/user',user);

app.listen(port,host,(req,res)=>{
    console.log(`server: http://${host}:${port}`);
})

