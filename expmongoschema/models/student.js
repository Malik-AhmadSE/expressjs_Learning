const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    admissionDate:{type:Date,default:Date.now}
})

///////// student Model

const studentModel=mongoose.model('student',studentSchema);
// module.exports=mongoose.model('student',studentSchema);

//// creating the documents
