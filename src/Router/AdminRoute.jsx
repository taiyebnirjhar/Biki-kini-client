import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { AuthContext } from "../Contexts/FireAuthContext";
import useAdmin from "../Hooks/UseAdmin";

function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader />;
  } else if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default AdminRoute;
