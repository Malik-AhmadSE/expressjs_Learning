const homeMiddleware=(req,res,next)=>{
    console.log('logged')
    next();
}

module.exports=homeMiddleware;