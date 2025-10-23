import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        } else {
            // Redirect to About or Services page after login
            navigate('/about');
        }
    }, [navigate]);

    return null; // Nothing to render because of redirect
}
