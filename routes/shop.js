const express = require("express");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    path: "/",
    pageTitle: "Shop",
  });
  // console.log("shop.js", adminData.products);
});

module.exports = router;
