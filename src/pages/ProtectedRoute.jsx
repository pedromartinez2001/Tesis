import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};
export default ProtectedRoute;
