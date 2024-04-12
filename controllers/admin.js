const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
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

exports.getAdminProducts = (req, res) => {
  res.render("admin/products", { path: "/admin/products", pageTitle: "Admin Products" });
};
