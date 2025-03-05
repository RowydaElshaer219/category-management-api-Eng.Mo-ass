const express = require('express');
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

// Create a new category and Get all categories
router.route('/')
  .post(createCategory)
  .get(getAllCategories);

// Get, update and delete category by ID
router.route('/:id')
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router; 