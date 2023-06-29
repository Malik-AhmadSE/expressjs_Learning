const express=require('express');
const routes=express.Router();
const aboutController = require('../controllers/aboutController');

routes.get('/about',aboutController);


module.exports = routes;
