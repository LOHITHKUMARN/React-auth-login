import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import { toast } from 'react-toastify';

export default function Auth() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({ email: '', password: '', role: 'user' });
    const navigate = useNavigate();

    const login = async e => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        });
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
            toast.success('Login successful!');
            navigate('/about');
        } else {
            toast.error(data.message);
        }
    };

    const signup = async e => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(signupData)
        });
        const data = await res.json();
        res.ok ? toast.success(data.message) : toast.error(data.message);
    };

    return (
        <div className="auth-container">
            <form className="auth-box fade-in" onSubmit={login}>
                <h2>Login</h2>
                <input type="email" placeholder="Email" onChange={e => setLoginData({ ...loginData, email: e.target.value })} required />
                <input type="password" placeholder="Password" onChange={e => setLoginData({ ...loginData, password: e.target.value })} required />
                <button type="submit">Login</button>
            </form>

            <form className="auth-box fade-in delay" onSubmit={signup}>
                <h2>Signup</h2>
                <input type="email" placeholder="Email" onChange={e => setSignupData({ ...signupData, email: e.target.value })} required />
                <input type="password" placeholder="Password" onChange={e => setSignupData({ ...signupData, password: e.target.value })} required />
                <select onChange={e => setSignupData({ ...signupData, role: e.target.value })}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}
