const mongoose=require('mongoose');

const options={
    // user:'ahmad',
    // pass:'123456',
    dbName:'studentdb',
    // authSource:'studentdb'
}
const connectdatabase=async (DATABASE_URL)=>{
    try{
        await mongoose.connect(DATABASE_URL,options);
        console.log('connected .....');
    }catch(error){
        console.log(error);
    }
}

module.exports=connectdatabase;