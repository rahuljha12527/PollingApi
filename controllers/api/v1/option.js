const questionM=require('../../../models/questionSchema');
const optionM=require('../../../models/optionSchema');

module.exports.deleteOptions=async function(req,res){
    try{
       let option=await optionM.findById(req.params.id);

       if(option.votes>0){
           return res.status(403).json({
               message:"Not allowed to Delete Option as it ha more than zero votes"
           })
       }else{
           let quesId=option.questionM;
           option.remove();
           let optionS=optionM.findByIdAndUpdate(quesId,{$pull:{ options:req.params.id}});

           return res.status(200).json({
               message:"Option Deleted Successfully"
           });

       }

    }catch(err){
        return res.json(500,{
            message:"Internal Server Error in Deleting Option"
        });
    }
};

module.exports.increaseVotes=async function(req,res){
    try{
     const id=req.params.id;
     let options=await optionM.findOne({_id:req.params.id});
     console.log("Option",options);
     let votes=options.votes+1;
     let quesId=options.questionM;
     let result=await Option.update({_id:id},{$set:{votes:votes}});
     let question=await questionM.findByIdAndUpdate(quesId,{$pull: {options:req.params.id}});

     res.status(200).json({
         message:"Vote Added Successfully"
     })
     

    }catch(err){
        return res.json(500,{
            message:"Error in adding a vote",

        })
    }
};