const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

// Product functions
const products = require('../../product');

router.post('/addProduct', urlencodedParser, (req, res) => {
  console.log(req.body.productName);
  console.log(req.body.description);
  console.log(req.body.quantity);
  products.addProduct(req.body.productName, req.body.description, req.body.quantity)
    .then(data => res.json({ data, success: true}))
    .catch(err => res.json({err, success: false}));
});

router.post('/remove/:id', urlencodedParser, (req, res) => {
  console.log(`Received id: ${req.params.id}`);
  products.removeProduct(req.params.id)
    .then(data => res.json({data, success: true}))
    .catch(err => res.json({err, success: false}));
});

router.get('/getProducts', (req, res) => {
  products.getProducts()
    .then(data => res.json({data, success: true}))
    .catch(err => res.json({err, sucess: false}));
});

router.post('/editProduct', urlencodedParser, (req, res) => {
  products.editProduct(req.body.id, req.body.productName, req.body.description, req.body.quantity)
  .then(data => res.json({data, success: true}))
  .catch(err => res.json({err, success: false}));
});

module.exports = router;
