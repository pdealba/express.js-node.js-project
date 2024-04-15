const express = require("express");
const router = express.Router();

const productsController = require("../controllers/admin");

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

router.get("/edit-product/:productId", productsController.getEditProduct);

router.post("/edit-product/:productId", productsController.postEditProduct);

router.get("/products", productsController.getAdminProducts);

module.exports = router;
