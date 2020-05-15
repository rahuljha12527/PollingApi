const questionM=require('../../../models/questionSchema');
const optionM=require('../../../models/optionSchema');


module.exports.createQuestion=async function(req,res){
     try{

        let result= await questionM.create({
           title:req.body.title,
        });
        result.save();
        
        return res.status(200).json({
           id:result._id,
           question:result.title
        });
        
     }catch(err){
      return  res.status(500).json({
           message:"Err in creating a question"
        })
     }

}


module.exports.deleteQuestion=async function(req,res){
   try{
      let questionD=await questionM.findById(req.params.id);
      questionD.remove();
      await optionM.deleteMany({question:req.params.id});
      return res.json(200,{
         message:"Question and option delete successfully"
      }); 
   }catch(err){
       return res.json(500,{
          message:"Internal Server error"
       });
   }  
}


module.exports.viewQuestion=async function(req,res){
  try{
     const id=req.params.id;
     console.log(id);
   let question=await questionM.find({"_id":id}).sort('-createdAt');
   console.log(question);
   if(question.length>0){
       res.status(200).json({questionM:question});
   }else{
      res.status(200).json({
         message:"No Question Available"
      });
   }

                       
}catch(err){
     console.log('Error in getting a question',err);
     res.status(500).json({
        message:"Error in getting a question"
     });
  }

}


module.exports.addOptionsToQuestion=async function(req,res){
   try{
      let ques=await questionM.findById(req.params.id);
      console.log(ques);
      if(ques){
         let option=await Option.create({
            text:req.body.text,
            votes:0,
            question:req.params.id 
         });
         option.link_to_vote=`http://localhost:8000/options/${option._id}/add_vote`;
         ques.option.push(option);
         ques.save();
         option.save();
         return res.json(200,{
            message:"Option Created Successfully",
            question:ques
         });
      }else{
         return res.status(404).json({
            message:"Question Not Found"
         });
      }
   }catch(err){
      return  res.json(500,{
         message:"Internal Server Error in adding Options",
         error:err
      });
   }
}