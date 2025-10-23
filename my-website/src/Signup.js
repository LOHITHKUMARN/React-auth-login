import { useState } from 'react';

export default function Signup() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [msg, setMsg] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        setMsg(data.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} required />
            <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} required />
            <button>Signup</button>
            <p>{msg}</p>
        </form>
    );
}
