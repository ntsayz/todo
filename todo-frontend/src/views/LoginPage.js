import React, { useState } from 'react';
import http from '../utils/http';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await http.post('/api/users/login', formData);
            localStorage.setItem('token', response.data.token);
            // Navigate to the main page or handle login as required
        } catch (error) {
            console.error("Login error", error.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username or Email"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
            <Link to="/register">Don't have an account? Register</Link>
        </div>
    );
};

export default LoginPage;

