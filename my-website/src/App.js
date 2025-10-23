import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Auth';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Logout from './Logout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const isLoggedIn = () => !!localStorage.getItem('token');

export default function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/about" element={isLoggedIn() ? <AboutUs /> : <Navigate to="/" />} />
        <Route path="/services" element={isLoggedIn() ? <Services /> : <Navigate to="/" />} />
        <Route path="/contact" element={isLoggedIn() ? <Contact /> : <Navigate to="/" />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
