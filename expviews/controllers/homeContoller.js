///////////// home controller logic
const {join}=require('path');
const homeController=(req,res)=>{
    res.sendFile(join(process.cwd(),'views','home.html'));
}

module.exports=homeController;