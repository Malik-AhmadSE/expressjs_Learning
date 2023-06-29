const mongoose = require('mongoose');
const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    admissionDate:{type:Date,default:Date.now}
});

///// creating model/////////

const studentModel=mongoose.model('student',studentSchema);

///// retrieve data //////

//// get all doc

// const getalldoc=async ()=>{
//     const result=await studentModel.find();
//     console.log(result);
// }

///// retrive data in single form using foreach loop

// const formatdoc=async ()=>{
//         const result=await studentModel.find();
//         result.forEach((item)=>{
//             console.log(
//                 item.name,
//                 item.age,
//                 item.admissionDate
//                 )
//         })
//     }

////// use select with find() including

// const formatdocselect=async ()=>{
//     // const result=await studentModel.find().select('name age');
//     // const result=await studentModel.find().select(['name','age']);
//     // const result=await studentModel.find().select({name:1,age:1});

//     console.log(result);
// }


///// using only find() function

// const formatdocselect=async ()=>{
//     // const result=await studentModel.find({},'name age');
//     // const result=await studentModel.find({},['name','age']);
//     const result=await studentModel.find({},{name:1,age:1});

//     console.log(result);
// }


////// exclude   ////

// const formatdocselect=async ()=>{
//         // const result=await studentModel.find().select('-name -age');
//         // const result=await studentModel.find().select(['-name','-age']);
//         // const result=await studentModel.find().select({name:0,age:0});
    
//         console.log(result);
//     }
    
////// exclude using find function////
const formatdocselect=async ()=>{
        // const result=await studentModel.find({},'-name -age');
        // const result=await studentModel.find({},['-name','-age']);
        // const result=await studentModel.find({},{name:0,age:0});
    
        console.log(result);
    }

// note 
// you can use logical and comparison operators also just explore the mongoose official docs


// module.exports=getalldoc;
// module.exports=formatdoc;
module.exports=formatdocselect;