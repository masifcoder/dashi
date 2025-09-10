import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, token, loading } = useContext(AuthContext);
  

  if (loading) return <div>Loading...</div>;
  if (!user || !token) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
