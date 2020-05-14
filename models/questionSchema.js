const mongoose=require('mongoose');

const questionS=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    options :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'optionSchema'
        }
    ]
});

const questionM=mongoose.model('questionM',questionS);
module.exports=questionM;