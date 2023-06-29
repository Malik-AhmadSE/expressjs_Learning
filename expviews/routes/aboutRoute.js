const express = require('express');
const route=express.Router();
const aboutController=require('../controllers/aboutController.js');


route.get('/about',aboutController);

module.exports=route;