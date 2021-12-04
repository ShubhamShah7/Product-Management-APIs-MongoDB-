require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());
const port = 7777;
const mongoose = require('mongoose');

const companyRoute = require('./routes/companyRoute');
const sellerRoute = require('./routes/sellerRoute');
const productRoute = require('./routes/productRoute');

mongoose.connect(process.env.MONGOURL).then(() => console.log("Db Connected"));

app.get("/", (req, res) => res.send("Bharat"));
app.use("/company", companyRoute);
app.use('/seller', sellerRoute);
app.use('/product', productRoute);

app.listen(port, ()=>console.log('Example App running on 7777'))