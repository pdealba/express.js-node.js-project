const express = require("express");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    pageTitle: "Add Product",
  });
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  console.log("admin.js", products);
  res.redirect("/");
});

exports.routers = router;
exports.products = products;
