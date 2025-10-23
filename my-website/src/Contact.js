import { useState } from 'react';
import './style3.css';
import { toast } from 'react-toastify';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        if (res.ok) {
            toast.success(data.message);
            setForm({ name: '', email: '', message: '' }); // Reset form
        } else {
            toast.error(data.message || "Something went wrong.");
        }
    };

    return (
        <>
            {/* 🔷 Modern Navbar */}
            <div className="navbar">
                <h1>MySite</h1>
                <div className="navbar-links">
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                    <a href="/logout" className="button secondary">Logout</a>
                </div>
            </div>

            <div className="page">
                <h1 className="fade-in">Contact Us</h1>
                <p
                    className="fade-in delay"
                    style={{ maxWidth: '700px', color: '#475569', fontSize: '1.1em', marginBottom: '30px' }}
                >
                    We’d love to hear from you! Whether you have a question about our services, pricing, or anything else,
                    our team is ready to answer all your questions. Please fill out the form below or reach us through
                    any of our social media channels.
                </p>

                <div className="section fade-in delay2" style={{ maxWidth: '700px', marginBottom: '40px' }}>
                    <h2>Our Contact Details</h2>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#475569', fontSize: '1.05em' }}>
                        <li>📞 Phone: +1 (555) 123-4567</li>
                        <li>📧 Email: support@example.com</li>
                        <li>🏢 Address: 123 Main Street, City, Country</li>
                        <li>⏰ Office Hours: Mon - Fri, 9:00 AM - 5:00 PM</li>
                    </ul>
                </div>

                <form className="contact-form fade-in delay3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    );
}
