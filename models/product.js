//const products = [];
// const path = require('path');

const fs = require("fs");

const p = require("../util/path");

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
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(
        p + "/data/products.json",
        JSON.stringify(products),
        (err) => {
          console.log(err);
        }
      );
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};