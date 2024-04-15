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

  static deleteProduct(id, productPrice) {
    fs.readFile(p + "/data/cart.json", (err, fileContent) => {
      if (!err) {
        const cart = JSON.parse(fileContent);
        const filteredproducts = cart.products.filter((p) => p.id !== id);
        const newTotalPrice = (cart.totalPrice -= productPrice);
        const newCart = { ...filteredproducts, totalPrice: newTotalPrice };

        fs.writeFile(p + "/data/cart.json", JSON.stringify(newCart), (err) =>
          console.log(err)
        );
      }
    });
  }
};
