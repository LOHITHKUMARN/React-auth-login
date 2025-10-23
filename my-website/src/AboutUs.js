import './style.css';

export default function AboutUs() {
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

            {/* 🔷 About Page Content */}
            <div className="about-page">
                <h1 className="fade-in">Welcome to Our Website!</h1>

                <section className="section fade-in delay">
                    <h2>🌟 Who We Are</h2>
                    <p>
                        We are a passionate team of developers and designers dedicated to delivering impactful digital solutions.
                        We bring your ideas to life using the latest technologies in web and mobile development.
                    </p>
                </section>

                <section className="section fade-in delay2">
                    <h2>🚀 What We Do</h2>
                    <p>
                        We offer full-stack development, custom UI/UX design, secure authentication, and real-time performance optimizations.
                        We build modern, scalable, and beautiful applications.
                    </p>
                </section>

                <section className="section fade-in delay3">
                    <h2>💼 Our Services</h2>
                    <ul>
                        <li>Web Development (React, Node.js, MongoDB)</li>
                        <li>UI/UX Design</li>
                        <li>Authentication Systems</li>
                        <li>API Integrations</li>
                    </ul>
                </section>

                <section className="section fade-in delay4">
                    <h2>🤝 Why Choose Us</h2>
                    <ul>
                        <li>Reliable and scalable solutions</li>
                        <li>Transparent communication</li>
                        <li>Modern design standards</li>
                        <li>Continued support & maintenance</li>
                    </ul>
                </section>

                <section className="section fade-in delay5">
                    <h2>✨ Let's Work Together!</h2>
                    <p>
                        Explore our Services page or reach out through the Contact form.
                        We’re excited to collaborate and build something amazing with you.
                    </p>
                </section>
            </div>
        </>
    );
}
