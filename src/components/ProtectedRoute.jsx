import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLoading from "./AuthLoading";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <AuthLoading />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
