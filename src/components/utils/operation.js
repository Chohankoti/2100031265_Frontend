// operation.js

const axios = require('axios');

const baseUrl = 'http://localhost:8080/user';

// Function to create a new user
async function createUser(user) {
    try {
        const response = await axios.post(baseUrl, user);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

// Function to retrieve all users
async function getUsers() {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error('Error getting users:', error);
        throw error;
    }
}

// Function to retrieve a user by ID
async function getUserById(id) {
    try {
        const response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting user with ID ${id}:`, error);
        throw error;
    }
}

// Function to update a user
async function updateUser(id, updatedUserData) {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, updatedUserData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

// Function to delete a user
async function deleteUser(id) {
    try {
        const response = await axios.delete(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

// Export the CRUD functions to be used in other files
module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
