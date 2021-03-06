const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  description: String,
  quantity: Number
});

module.exports = mongoose.model('product', productSchema);
