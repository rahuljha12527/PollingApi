const mongoose=require('mongoose');

const optionS=new mongoose.Schema({
    option:{
        type:String,
        required:true
    },

    votes:{
        type:Number
    },

    link_to_vote:{
        type:String
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'questionM'
    }
    
});

const optionM=mongoose.model('optionM',optionM);

module.exports=optionM