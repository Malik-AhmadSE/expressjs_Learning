///////////// about controller logic
const {join} =require('path');
const aboutController=(req,res)=>{
    res.sendFile(join(process.cwd(),'views','about.html'));
}

module.exports=aboutController;