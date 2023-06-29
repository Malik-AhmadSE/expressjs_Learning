const express=require('express');
const routes=express.Router();
const studentController=require('../controllers/studentController');
routes.get('/cr',studentController.studentCont);
routes.get('/del',studentController.deletestu);

module.exports=routes;