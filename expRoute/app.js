///// importing express /////////

const express = require('express');

const app=express();

/////  get request

// app.get('/',(req,res)=>{
//     res.send('This is get request');
// })

////// post request

// app.post('/post',(req,res)=>{
//     res.send('This is Post request');
// })

////////// put request

// app.put('/put',(req,res)=>{
//     res.send('This is put request');
// })

///////// patch request

// app.patch('/patch',(req,res)=>{
//     res.send('This is patch request');
// })

/////// delete request

// app.delete('/delete',(req,res)=>{
//     res.send('This is delete request');
// })

///////// all request use for all type of requests

// app.all('/',(req,res)=>{
//     res.send('all request');
// })


/////////////////////////////// Route method //

app.route('/')
.get((req,res)=>{
    res.send('get request');
})
// .post((req,res)=>{

// })........... continue for other requests 

//////////// listening the app on port 

const Port=process.env.PORT || '8000';
const Host='localhost';
app.listen(Port,Host,()=>{
    console.log(`http://localhost:${Port}`);
});