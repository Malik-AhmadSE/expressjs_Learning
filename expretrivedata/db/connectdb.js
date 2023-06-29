const mongoose = require('mongoose');

const Option={
    dbName:'studentdb'
}
const connectDatabase=async (DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL,Option);
        console.log('connected ....');
    } catch (error) {
        console.log(`Error:${error}`);
    }
}

module.exports=connectDatabase;