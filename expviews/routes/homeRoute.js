const express = require('express');
const route=express.Router();
const homeController=require('../controllers/homeContoller');


route.get('/home',homeController);

module.exports=route;