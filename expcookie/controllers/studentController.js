// const studentCont=async (req,res)=>{
//     try {
//         await res.cookie("name","Ahmad");
//         await res.cookie("age",22);
//         res.send('<h1>cookie  ......</h1>')
       
//     } catch (error) {
//         console.log('create error');
//     }
//     console.log(req.cookies);
// }

////// using maxAge
const studentCont=async (req,res)=>{
    try {
        await res.cookie("name","Ah",{maxAge:30000});
        await res.cookie("age",22);
        res.send('<h1>cookie  ......</h1>')
       
    } catch (error) {
        console.log('create error');
    }
    console.log(req.cookies);
}

const deletestu=async (req,res)=>{
    try {
        await res.clearCookie("name");
        res.send('cleared')
        
    } catch (error) {
        console.log('del error');
    }
    console.log(req.cookies);
}
module.exports={studentCont,deletestu};