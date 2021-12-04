const express = require('express');
const router = express.Router();
router.use(express.json());

const companyModel = require('../models/company');
const sellerModel = require('../models/seller');
const productModel = require('../models/product');

router.post('/add', (req, res) => {
    const data = req.body;
    sellerModel.create(data);
    return res.json({ data: "Seller Added" });
});

router.get("/fetch/:name", async (req, res) => {
    const name = req.params.name;
    const find = await sellerModel.find({ name: name });
    const list = await productModel.find({ product_id: find[0].product_id });
    return res.json({ data: list });
});

router.put('/update/:id',async (req, res) => {
    const sid = req.params.seller_id;

    const data = req.body;
    const seller = await companyModel.findOneAndUpdate({ seller_id: sid }, data, { new: true });
    return res.json({ data: "Updated", sellerDetail: seller });
})

router.delete('/delete/:id', async (req, res) => {
    const sid = req.params.id;
    const seller = await sellerModel.findOneAndDelete({ seller_id: sid })
    return res.json({data:"Deleted"})
})

module.exports = router;