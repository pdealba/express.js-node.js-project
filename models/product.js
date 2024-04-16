//const products = [];
// const path = require('path');

const fs = require("fs");
const p = require("../util/path");

const Cart = require("./cart");

const getProductsFromFile = (cb) => {
  fs.readFile(p + "/data/products.json", (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, description, price, imageUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save() {
    getProductsFromFile((products) => {
      if (this.id) {
        const productIndex = products.findIndex((p) => p.id === this.id);
        products[productIndex] = this;
        fs.writeFile(
          p + "/data/products.json",
          JSON.stringify(products),
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(
          p + "/data/products.json",
          JSON.stringify(products),
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static getById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }

  static deleteById(id) {
    getProductsFromFile((products) => {
      const filteredProducts = products.filter((p) => p.id !== id);
      fs.writeFile(
        p + "/data/products.json",
        JSON.stringify(filteredProducts),
        (err) => {
          if (!err) {
            const product = products.find((p) => p.id === id);
            Cart.deleteProduct(id, product.price); // We delete the item from the cart
          }
          console.log(err);
        }
      );
    });
  }
};
