const express = require("express");

const router = express.Router();

const productsController = require("../controllers/shop");

router.get("/cart", productsController.getCart);

router.get("/products", productsController.getProducts);

router.get("/", productsController.getIndex);

module.exports = router;
