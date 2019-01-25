const Product = require('./model/Product');
const empty = require('is-empty');


module.exports.addProduct = function (name, description, quantity) {

  return new Promise((resolve, reject) => {
    // Searching for product by name in database
    Product.find({name: name}).then(function(result) {
      console.log(`Found result: ${result}`);
      if(!empty(result)) {
        return reject('Product already exists.');
      }

      // Creating new product
      const newProduct = new Product({
        name: name,
        description: description,
        quantity: quantity
      });

      // Adding new product to database
      newProduct.save().then(function() {
        if(newProduct.isNew) { // isNew means that record hasn't been saved to the databse yet.
          return reject(`Can't add new product with name: ${name}`);
        }
        console.log(`Product ${name} added successfully`);
        return resolve(newProduct);
      });
    });
  });
}

module.exports.editProduct = function (id, newName, newDescription, newQuantity) {

  return new Promise((resolve, reject) => {
    Product.findOneAndUpdate({_id: id}, {name: newName, description: newDescription, quantity: newQuantity}, {new: true}).then(function(result) {
      console.log('Product updated successfully!');
      return resolve(result);
    });
  });
}

module.exports.removeProduct = function (id) {
  return new Promise ((resolve, reject) => {
    Product.findOneAndRemove({_id: id}).then(function(result) {
      if(empty(result))
        return reject('Product does not exist.');
      console.log(`Result: ${result}`);
      return resolve(result);
    });
  });
}

module.exports.getProducts = function () {
  return new Promise((resolve, reject) => {
    Product.find().then(function(result){
        resolve(result);
    });
  });
}
