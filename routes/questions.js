const express=require('express');

const router=express.Router();

const questionA=require('../controllers/api/v1/question');

// All question routes

router.post('/create',questionA.createQuestion);
router.get('/:id',questionA.viewQuestion);

router.delete('/:id/delete',questionA.deleteQuestion);

router.post('/:id/options/create',questionA.addOptionsToQuestion);


module.exports=router;