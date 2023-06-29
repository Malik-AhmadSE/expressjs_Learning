const {join} = require('path');

const homecontroller=(req,res)=>{
    res.sendFile(join(process.cwd(),'views','home.html'));
}


module.exports=homecontroller;