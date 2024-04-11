const express = require("express");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", {
    prods: adminData.products,
    path: "/",
    pageTitle: "Shop",
  });
});

module.exports = router;
