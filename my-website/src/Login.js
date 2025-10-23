import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem('token', data.token);
            navigate('/home');
        } else {
            setMsg(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
            <button>Login</button>
            <p>{msg}</p>
        </form>
    );
}
