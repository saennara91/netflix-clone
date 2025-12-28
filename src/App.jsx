import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/player/:id"
        element={
          <ProtectedRoute>
            <Player />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
