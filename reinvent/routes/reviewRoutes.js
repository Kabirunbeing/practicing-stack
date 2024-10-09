const express = require('express');
const {
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
} = require('../controllers/reviewController');

const router = express.Router();

// GET all reviews
router.get('/', getReviews);

// GET review by ID
router.get('/:id', getReviewById);

// POST create a new review
router.post('/', createReview);

// PUT update a review by ID
router.put('/:id', updateReview);

// DELETE remove a review by ID
router.delete('/:id', deleteReview);

module.exports = router;
