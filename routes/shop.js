const express = require("express");

const router = express.Router();

const productsController = require("../controllers/shop");

router.get("/cart", productsController.getCart);

router.post("/cart", productsController.postCart);

router.post("/cart-delete-item", productsController.postDeleteCart);

router.get("/products", productsController.getProducts);

router.get("/product/:productId", productsController.getProduct);

router.get("/orders", productsController.getOrders);

router.get("/", productsController.getIndex);

module.exports = router;
