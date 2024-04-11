const express = require("express");

const router = express.Router();

const path = require("path");
const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  console.log("admin.js", products);
  res.redirect("/");
});

exports.routers = router;
exports.products = products;

// module.exports = router;
