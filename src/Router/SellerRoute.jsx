import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { AuthContext } from "../Contexts/FireAuthContext";
import useSeller from "../Hooks/UseSeller";

function SellerRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loader />;
  } else if (user && isSeller) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default SellerRoute;
