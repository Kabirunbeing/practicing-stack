const API_URL = "http://localhost:5000/api"; // Adjust if the backend URL differs

// Users API

// Fetch all users
export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

// Fetch a single user by ID
export const fetchUserById = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  return response.json();
};

// Create a new user
export const createUser = async (userData) => {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// Products API

// Fetch all products
export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

// Create a new product
export const createProduct = async (productData) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  return response.json();
};

// Reviews API

// Fetch all reviews
export const fetchReviews = async () => {
  const response = await fetch(`${API_URL}/reviews`);
  return response.json();
};

// Create a new review
export const createReview = async (reviewData) => {
  const response = await fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  });
  return response.json();
};

// Orders API

// Fetch all orders
export const fetchOrders = async () => {
  const response = await fetch(`${API_URL}/orders`);
  return response.json();
};

// Create a new order
export const createOrder = async (orderData) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
  return response.json();
};
