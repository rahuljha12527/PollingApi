const mongoose=require('mongoose');

const questionS=new mongoose.Schema({
    title:{
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
},{
    timestamps:true
});

const questionM=mongoose.model('questionM',questionS);
module.exports=questionM;