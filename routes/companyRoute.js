const express = require('express');
const { mongoose } = require('mongoose');
const companyModel = require('../models/company');
const router = express.Router();
router.use(express.json());

router.post('/', (req, res) => {
    return res.json({ data: "Company Page" });
})

router.post('/add',(req,res)=>{
    const record = req.body;
    companyModel.create(record)
    return res.json({data:'company Add Sucessfully .....'})
});

router.put('/update/:company_id',async(req,res)=>{
    const id = req.params.company_id;
      
    const data = req.body;
    const update =await companyModel.findOneAndUpdate({company_id:id},data,{new:true})
    return res.json({data:'Data Updated Sucessfully'})
});
  
router.delete('/delete/:id', async (req, res) => {
    const cid = req.params.id;
    const com = await companyModel.findOneAndDelete({ company_id: cid })
    return res.json({data:"Deleted"})
})

module.exports = router;
