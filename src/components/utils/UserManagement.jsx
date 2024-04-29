import React, { useState } from 'react';
import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from './operation';
import { v4 as uuidv4 } from 'uuid';

function UserManagement() {
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState('');

    // Function to handle creating a new user
    const handleCreateUser = async () => {
        try {
            // Generate a UUID for the new user
            const newUserId = uuidv4();
            // Create a new user object with the generated ID and any other necessary data
            const newUser = {
                id: newUserId,
                // Add other user properties here (e.g., firstName, lastName, etc.)
            };
            // Call the createUser function with the new user object
            await createUser(newUser);
            console.log('User created successfully.');
            setMessage(`User created with ID ${newUserId} successfully.`);
        } catch (error) {
            console.error('Error creating user:', error);
            setMessage('Error creating user. Please check console for details.');
        }
    };

    // Function to handle fetching all users
    const handleFetchAllUsers = async () => {
        try {
            const users = await getUsers();
            console.log('All users:', users);
            setMessage('All users fetched successfully.');
        } catch (error) {
            console.error('Error fetching users:', error);
            setMessage('Error fetching users. Please check console for details.');
        }
    };

    // Function to handle fetching a user by ID
    const handleFetchUserById = async () => {
        try {
            const user = await getUserById(userId);
            console.log('User:', user);
            setUserData(user);
            setMessage(`User with ID ${userId} fetched successfully.`);
        } catch (error) {
            console.error('Error fetching user:', error);
            setMessage(`Error fetching user with ID ${userId}. Please check console for details.`);
        }
    };

    // Function to handle updating a user
    const handleUpdateUser = async () => {
        try {
            await updateUser(userId, userData);
            console.log('User updated successfully.');
            setMessage(`User with ID ${userId} updated successfully.`);
        } catch (error) {
            console.error('Error updating user:', error);
            setMessage(`Error updating user with ID ${userId}. Please check console for details.`);
        }
    };

    // Function to handle deleting a user
    const handleDeleteUser = async () => {
        try {
            await deleteUser(userId);
            console.log('User deleted successfully.');
            setMessage(`User with ID ${userId} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting user:', error);
            setMessage(`Error deleting user with ID ${userId}. Please check console for details.`);
        }
    };

    return (
        <div>
            <button onClick={handleCreateUser}>Create User</button>
            <br />
            <button onClick={handleFetchAllUsers}>Fetch All Users</button>
            <br />
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            <br />
            <button onClick={handleFetchUserById}>Fetch User by ID</button>
            <br />
            <button onClick={handleUpdateUser}>Update User</button>
            <br />
            <button onClick={handleDeleteUser}>Delete User</button>
            <br />
            <p>{message}</p>
        </div>
    );
}

export default UserManagement;
