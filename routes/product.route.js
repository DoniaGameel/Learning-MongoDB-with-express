const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// Get all products
router.get("/", getProducts);
// Get product by ID
router.get("/:id", getProduct);
// Update product
router.put("/:id", updateProduct);
// Create new product
router.post("/api/products", createProduct);
// Delete product
router.delete("/api/products/:id", deleteProduct);

module.exports = router;
