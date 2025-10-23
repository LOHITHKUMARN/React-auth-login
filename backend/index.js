const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ User Model
const User = require('./models/User');

// ✅ Contact Model (stored in 'contacts' collection)
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// ✅ JWT Middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({ message: "Invalid token" });
    }
};

// ✅ Register Route
app.post('/api/register', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email,
            password: hashedPassword,
            role: role || 'user'
        });

        await user.save();
        res.status(201).json({ message: "Registered successfully" });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: "Registration error" });
    }
});

// ✅ Login Route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token, role: user.role });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: "Login failed" });
    }
});

// ✅ Admin Route
app.get('/api/admin', authMiddleware, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: "Access denied" });
    }
    res.json({ message: "Welcome Admin!" });
});

// ✅ Contact Form Submission
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    console.log('📨 Contact form received:', { name, email, message });

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error('❌ Failed to save contact message:', error);
        res.status(500).json({ message: "Failed to send message." });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
