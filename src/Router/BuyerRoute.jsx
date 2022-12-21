import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { AuthContext } from "../Contexts/FireAuthContext";
import useBuyer from "../Hooks/UseBuyer";

function BuyerRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <Loader />;
  } else if (user && isBuyer) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
}

export default BuyerRoute;
