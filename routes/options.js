const express=require('express');

const router=express.Router();

const optionC=require('../controllers/api/v1/option');

router.post('/:id/add_vote',optionC.increaseVotes);
router.delete('/:id/delete',optionC.deleteOptions);

module.exports=router;
