const Product = require("../models/product");
const Cart = require("../models/cart");

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

exports.getProduct = (req, res) => {
  const prodId = req.params.productId;
  Product.getById(prodId, (product) => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart", pageTitle: "Cart" });
};

exports.postCart = (req, res) => {
  const productId = req.body.prodId;
  Product.getById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect("/cart");
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", { path: "/orders", pageTitle: "Orders" });
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
