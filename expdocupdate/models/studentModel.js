const mongoose = require('mongoose');
const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    admissionDate:{type:Date,default:Date.now}
});

///// creating model/////////

const studentModel=mongoose.model('student',studentSchema);


////// updating data

// const updateData=async (id)=>{
// try {
//     const result=await studentModel.findByIdAndUpdate(id,{name:'hassan',age:50});
//     console.log(result);
// } catch (error) {
//     console.log(error);
// }
// }

///// not showing the old data

// const updateData=async (id)=>{
//     try {
//         const result=await studentModel.findByIdAndUpdate(id,{name:'hassan',age:50},{returnDocument:'after'});
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
//     }


////// using filter you can update using anything e.g id,name etc
// const updateData=async (id)=>{
//     try {
//         const result=await studentModel.updateOne({_id:id},{name:'hassan ali',age:50},{returnDocument:'after'});
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
//     }






module.exports=updateData;