const Product = require("../models/product");

// Shop Controllers
exports.getProducts = (req, res) => {
  products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      path: "/products",
      pageTitle: "Shop",
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart", pageTitle: "Cart" });
};

exports.getIndex = (req, res) => {
  products = Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      path: "/",
      pageTitle: "Home",
    });
  });
};
