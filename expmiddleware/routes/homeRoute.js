const express=require('express');
const routes=express.Router();
const homeController = require('../controllers/homeController');
const homeMiddleware=require('../middlewares/homeMiddleware');
routes.use(homeMiddleware)

routes.get('/',homeController);

module.exports = routes;
