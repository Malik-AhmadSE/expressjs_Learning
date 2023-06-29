///////// creating the end point 

const express=require('express');
const route=express.Router();

const usercontrol=require('../controllers/userlogic');

route.get('/',usercontrol);


module.exports=route;