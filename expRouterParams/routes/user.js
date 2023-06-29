///////// importing express module

const express = require('express');
const router=express.Router();

// router.get('/:id',(req,res)=>{
//     console.log(req.params);
//     res.send('This is the request from user');
// })


/////////// router with regex

// router.get('/:id([0-9]{2})',(req,res)=>{
//     console.log(req.params)
//     res.send('this id the request');
// })

///// regex new /////


// router.get('/:type(post|articles)',(req,res)=>{
//     console.log(req.params)
//     res.send('this id the request');
// })

/////////// app.param

// router.param('id',(req,res,next,id)=>{
//     console.log(id);
//     next();
// });

// router.get('/:id',(req,res)=>{
//     res.send('response ok');
// });


////////// query string 

router.get('/do',(req,res)=>{
    console.log(req.query);
    res.send('response ok');
});

module.exports=router;