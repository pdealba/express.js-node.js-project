const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
  });
};

exports.postAddProduct = (req, res) => {
  const r = req.body;
  product = new Product(r.title, r.description, r.price, r.imageURL);
  product.save();
  res.redirect("/");
};

exports.getAdminProducts = (req, res) => {
  res.render("admin/products", {
    path: "/admin/products",
    pageTitle: "Admin Products",
  });
};
