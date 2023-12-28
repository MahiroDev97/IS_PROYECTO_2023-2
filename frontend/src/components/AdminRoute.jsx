import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react"; // Add missing import

export default function AdminRoute({ children }) {
    const { isAdmin } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAdmin) {
            navigate('/');
        }
    }, [isAdmin, navigate]);

    return children;
}
