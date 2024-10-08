const API_URL = "http://localhost:5000/api"; // Adjust if the backend URL differs

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
