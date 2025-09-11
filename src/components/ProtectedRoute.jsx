import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, token, loading, setUser, setToken } = useContext(AuthContext);

  useEffect(() => {
    // Check localStorage for persisted user and token
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch (e) {
        // If parsing fails, clear localStorage
       // localStorage.removeItem("user");
       // localStorage.removeItem("token");
      }
    }
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!user || !token) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
