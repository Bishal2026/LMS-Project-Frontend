import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Requireauth({ allowedRoles }) {
  const { isLoggedIn, role } = useSelector((state) => state.auth);
  //   const loaction = useLocation();

  return isLoggedIn && allowedRoles.find((myrole) => myrole === role) ? (
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to="/denied" />
  ) : (
    <Navigate to="/login" />
  );
}

export default Requireauth;
