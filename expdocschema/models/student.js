const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    admissionDate:{type:Date,default:Date.now}
})

///////// student Model

const studentModel=mongoose.model('student',studentSchema);

// module.exports=mongoose.model('student',studentSchema);


// const createStudentDoc=async ()=>{
//     try {
//         const studentdoc=new studentModel({
//             name:'ahmad',
//             age:22
//         })
        
//         await studentdoc.save();        
//     } catch (error) {
//         console.log(error);
//     }
// }


//////////////// using parameters //////////

const createStudentDoc=async (nm,ag)=>{
    try {
        const studentdoc=new studentModel({
            name:nm,
            age:ag
        })
        
        await studentdoc.save();        
    } catch (error) {
        console.log(error);
    }
}

module.exports=createStudentDoc;