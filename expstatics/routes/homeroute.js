const express = require('express');

const route=express.Router();
const homecontroller = require('../controllers/homeController.js');
route.get('/',homecontroller);

module.exports=homecontroller;