const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
  });
};

exports.postAddProduct = (req, res) => {
  product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      path: "/",
      pageTitle: "Shop",
    });
  });
};
