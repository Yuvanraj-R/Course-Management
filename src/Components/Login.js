import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom'; // Import useParams

function Login() {
    // Get the userType from the URL (e.g., 'student' or 'admin')
    const { userType } = useParams();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                password,
                role: userType.toUpperCase() // Send the role to the backend
            });

            const { token, name, role } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('userName', name);
            localStorage.setItem('userRole', role);

            // Redirect based on the role confirmed by the backend
            if (role === 'STUDENT') {
                navigate('/student/dashboard');
            } else if (role === 'ADMIN') {
                navigate('/admin/dashboard');
            }

        } catch (err) {
            if (err.response) {
                setError(err.response.data || 'Invalid credentials.');
            } else {
                setError('Login failed. Please try again.');
            }
        }
    };

    return (
        <div style={{ width: '350px', margin: '50px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Link to="/" style={{ color: '#555', textDecoration: 'none' }}>← Back to Role Selection</Link>
            {/* Capitalize the first letter of the userType for the title */}
            <h2 style={{ textTransform: 'capitalize', textAlign: 'center' }}>{userType} Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}/>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}/>
                </div>
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;