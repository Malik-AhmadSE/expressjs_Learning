const mongoose = require('mongoose');
const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    admissionDate:{type:Date,default:Date.now}
});

///// creating model/////////

const studentModel=mongoose.model('student',studentSchema);

// delete document

// const findanddelete=async (id)=>{
//     try {
//         // const result=await studentModel.findByIdAndDelete(id)
//         const result=await studentModel.deleteOne({_id:id});
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

const findanddelete=async (ag)=>{
    try {
        const result=await studentModel.deleteMany({age:ag});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports=findanddelete;