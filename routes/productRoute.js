const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const companyModel = require('../models/company');

const productModel = require('../models/product');
const sellerModel = require('../models/seller');
router.use(express.json());

router.get('/', (req, res) => {
    return res.json({ data: "This is product" });
})

router.post('/add', (req, res) => {
    const prod = req.body;
    productModel.create(prod);
    return res.json({ data: "Product Added" });
})

router.put('/update/:product_id', async (req, res) => {
    const id = req.params.product_id;
    const data = req.body;
    const update = await productModel.findOneAndUpdate({ product_id: id }, data, { new: true });
    return res.json({data:"Product updated"})
})

router.delete('/delete/:product_id', async (req, res) => {
    const id = req.params.product_id;
    const del = await productModel.findOneAndDelete({ product_id: id });
    return res.json({ data: "Deleted" });
})

router.get('/fetch/companyDetail/:Title', async(req, res) => {
    const name = req.params.Title;
    const data = await productModel.find({ Title: name });
    const list = await companyModel.find({ company_id: data[0].company_id });
    return res.json({ data: list });
})

router.get('/fetch/sellerDetail/:Title',async(req,res)=>{
    const name =  req.params.Title;
    const data = await productModel.find({Title:name});
    const list = await sellerModel.find({seller_id:data[0].seller_id});
    return res.json({data:list})
  });

module.exports = router;