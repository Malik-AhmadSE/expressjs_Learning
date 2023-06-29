const data={
    'name':'ahmad',
    'title':'HOME PAGE',
    'disp':'This is home page'
}
const homeController=(req,res)=>{
    res.render('home',data);
}

module.exports=homeController;