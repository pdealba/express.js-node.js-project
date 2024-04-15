const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
  });
};

exports.postAddProduct = (req, res) => {
  const r = req.body;
  product = new Product(r.title, r.description, r.price, r.imageUrl);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res) => {
  Product.getById(req.params.productId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      product: product,
      pageTitle: "Edit: " + product.title,
      path: "/admin/edit-product",
    });
  });
};

exports.getAdminProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      path: "/admin/products",
      pageTitle: "Admin Products",
    });
  });
};
