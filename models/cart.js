const fs = require("fs");
const p = require("../util/path");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(p + "/data/cart.json", (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      // Get existing cart
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const productExistsIndex = cart.products.findIndex((p) => p.id === id);

      if (productExistsIndex !== -1) {
        cart.products[productExistsIndex].qty += 1; // Update quantity if item exists
      } else {
        cart.products.push({ id: id, qty: 1 }); // Push new item if it dosent
      }
      cart.totalPrice += +productPrice; // Update total price

      fs.writeFile(p + "/data/cart.json", JSON.stringify(cart), (err) =>
        console.log(err)
      );
    });
  }
};
