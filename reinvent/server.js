const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');  
const reviewRoutes = require('./routes/reviewRoutes'); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Simple route to check the API
app.get('/check', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Product routes
app.use('/api/products', productRoutes);

// User routes
app.use('/api/users', userRoutes);

// Order routes
app.use('/api/orders', orderRoutes);  // Add Order Routes

// Review routes
app.use('/api/reviews', reviewRoutes); // Add Review Routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
