// controllers/reviewController.js
const Review = require('../models/reviewModel');

// GET all reviews
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('userId').populate('productId');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// GET review by ID
const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('userId').populate('productId');
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// POST create a new review
const createReview = async (req, res) => {
    const { userId, productId, rating, comment } = req.body;

    if (!userId || !productId || !rating || !comment) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newReview = new Review({
            userId,
            productId,
            rating,
            comment
        });

        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error creating review' });
    }
};

// PUT update a review
const updateReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        const { rating, comment } = req.body;
        review.rating = rating || review.rating;
        review.comment = comment || review.comment;

        const updatedReview = await review.save();
        res.json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error updating review' });
    }
};

// DELETE remove a review
const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        await review.remove();
        res.json({ message: 'Review removed' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review' });
    }
};

module.exports = {
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
};
