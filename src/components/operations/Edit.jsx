import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const { id } = useParams();
    const navigation = useNavigate();

    // State to manage form data
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Department: '',
        Gender: '',
        Age: ''
    });

    // Fetch user data with the provided ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/user/${id}`);
                const userData = response.data;
                // Set form data with user data
                setFormData({
                    FirstName: userData.FirstName,
                    LastName: userData.LastName,
                    Department: userData.Department,
                    Gender: userData.Gender,
                    Age: userData.Age
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, [id]);

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make PUT request to update user with the provided ID
            await axios.put(`http://localhost:8080/user/${id}`, formData);
            navigation("/employee");
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Error updating user. Please check console for details.');
        }
    };

    // Function to handle input change and update form data
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Edit User {id}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">First Name:</label>
                    <input
                        type="text"
                        name="FirstName"
                        value={formData.FirstName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Last Name:</label>
                    <input
                        type="text"
                        name="LastName"
                        value={formData.LastName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Department:</label>
                    <input
                        type="text"
                        name="Department"
                        value={formData.Department}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Gender:</label>
                    <select
                        name="Gender"
                        value={formData.Gender}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Age:</label>
                    <input
                        type="number"
                        name="Age"
                        value={formData.Age}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Update User</button>
            </form>
        </div>
    );
}
