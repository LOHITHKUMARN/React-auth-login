# React + MongoDB Full Stack App

This is a **React + MongoDB full stack application** that provides user authentication (Login / Signup) and a contact form feature.  
All user and contact data are stored securely in a **MongoDB database** using **MongoDB Compass**.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Login checks user credentials from MongoDB.
  - If the user doesn’t exist, Signup creates a new user record.
- 📝 **Contact Form**
  - Stores contact messages in the MongoDB database.
- 🌐 **Protected Routes**
  - Routes like `/about`, `/services`, `/contact` are accessible only after login.
- 🧠 **React Router**
  - Handles navigation and route protection.
- 💬 **Toast Notifications**
  - Shows success and error messages using `react-toastify`.

---

## 🧩 Tech Stack

### Frontend:
- React
- React Router DOM
- React Toastify
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

## ⚙️ Prerequisites

Before running the app, make sure you have installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
- npm (comes with Node.js)

---

## 🧠 Setting Up MongoDB (Compass)

1. **Install MongoDB & MongoDB Compass**
   - Download MongoDB and Compass from:  
     👉 https://www.mongodb.com/try/download/compass
2. **Open MongoDB Compass**
   - In Compass, connect using the default connection string:  
     ```
     mongodb://127.0.0.1:27017
     ```
3. **Create a New Database**
   - Click **"Create Database"**
   - Database Name: `reactAuth`
   - Collection Name: `users`
4. (Optional) Create another collection named `contacts` for storing contact messages.

---

## 🧰 Installation & Setup

### 1. Clone the Repository
`` bash
git clone https://github.com//https://github.com/LOHITHKUMARN/React-auth-login/tree/main.git
cd https://github.com/LOHITHKUMARN/React-auth-login/tree/main         

### 2. Setup the Backend

If your backend folder is named server, navigate to it:
cd server

#### Install dependencies:
npm install

#### Create a .env file:
MONGO_URI=mongodb://127.0.0.1:27017/reactAuth
PORT=5000
JWT_SECRET=your_secret_key

Run the server:
npm start
Server should start on http://localhost:5000

### 3. Setup the Frontend

In another terminal window, go to the frontend folder (for example, client):
cd client

Install dependencies:
npm install
Start the React app:
npm start

React app will run on http://localhost:3000

#### 🔗 Connecting Frontend & Backend

In your React frontend (e.g., inside src/api.js or wherever you make Axios calls), set your backend API URL:
const API_BASE_URL = "http://localhost:5000";
Make sure you’re sending requests to this server.

# 🧑‍💻 How the App Works

-- Signup
User enters details → saved in MongoDB → redirects to login.
-- Login
Checks credentials in MongoDB.
If valid → user gets a token stored in localStorage.
If not valid → prompt to sign up.
Protected Pages
/about, /services, /contact can only be accessed if user is logged in (based on the token in localStorage).
-- Contact Form
Stores name, email, and message in the MongoDB contacts collection.

# Project Structure

## 📂 Project Structure

Here is the file structure for this MERN project. The `backend` folder contains the Node.js/Express server, and `my-website` contains the React frontend.

```bash
reactfront/
│
├── backend/
│   ├── models/
│   │   └── ... 
│   ├── .env            # Server environment variables (MONGO_URI, etc.)
│   ├── index.js        # Main server file (Express)
│   ├── package.json
│   └── package-lock.json
│
└── my-website/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── AboutUs.js
    │   ├── App.css
    │   ├── App.js          # Main React component
    │   ├── App.test.js
    │   ├── auth.css
    │   ├── Auth.js         # Login/Signup container component
    │   ├── Contact.js
    │   ├── Home.js
    │   ├── index.css
    │   ├── index.js        # Main React entry point
    │   ├── Login.js
    │   ├── logo.svg
    │   ├── Logout.js
    │   ├── Navbar.js
    │   ├── reportWebVitals.js
    │   ├── Services.js
    │   ├── setupTests.js
    │   ├── Signup.js
    │   ├── style.css
    │   ├── style2.css
    │   └── style3.css
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── README.md

Stores name, email, and message in the MongoDB contacts collection.
