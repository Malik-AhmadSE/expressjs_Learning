const mongoose=require('mongoose');

//// connect with database

// const connectdb=()=>{
//    return mongoose.connect('mongodb://127.0.0.1:27017/studentdb')
// .then(()=>{
//     console.log('connected successfully ...');
// })
// .catch((err)=>{
//     console.log(err);
// })}

const Option={
    user:'ahmad',
    pass:'123456',
    dbName:'studentdb',
    authSource:'studentdb'
}

const connectdb=async (Database)=>{
       try {
        await mongoose.connect(Database,Option);
        console.log('connected successfully ...');
    } catch (err) {
        console.log(err);
    }}

module.exports=connectdb;