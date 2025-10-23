import React from 'react';
import './style2.css';

export default function Services() {
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

            <div className="services-page">
                <h1 className="fade-in">🚀 Our Services</h1>
                <p className="fade-in delay">Explore our amazing offerings below!</p>

                <div className="services-grid fade-in delay2">
                    <div className="service-card">
                        <h3>💼 Business Consulting</h3>
                        <p>We help startups and enterprises grow with data-driven insights and strategic planning.</p>
                    </div>
                    <div className="service-card">
                        <h3>🖥️ Web Development</h3>
                        <p>Modern, fast, and responsive web applications using React, Node.js, and MongoDB.</p>
                    </div>
                    <div className="service-card">
                        <h3>📈 SEO & Marketing</h3>
                        <p>Boost your online presence with our expert SEO strategies and digital marketing campaigns.</p>
                    </div>
                    <div className="service-card">
                        <h3>📊 Data Analytics</h3>
                        <p>Leverage data to make smarter business decisions with our tailored analytics solutions.</p>
                    </div>
                    <div className="service-card">
                        <h3>🎨 UI/UX Design</h3>
                        <p>Create beautiful and user-friendly interfaces that keep your users engaged and satisfied.</p>
                    </div>
                    <div className="service-card">
                        <h3>🔐 Authentication Systems</h3>
                        <p>Secure your applications with robust authentication and authorization frameworks.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
