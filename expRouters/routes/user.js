///////// importing the express module

const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('get request');
})

module.exports = router;