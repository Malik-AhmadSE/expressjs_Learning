const express=require('express');
const app=express();
const {join}=require('path');
const homeRoute=require('./routes/homeRoute');
const aboutRoute=require('./routes/aboutRoute');
const port=process.env.PORT || '8000';
const host='localhost';
app.set('views','./views');
app.set('view engine','ejs');
app.use(express.static(join(process.cwd(),'public')));
app.use('/',[homeRoute,aboutRoute]);


app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`);
})

