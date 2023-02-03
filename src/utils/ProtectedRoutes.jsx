import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const ProtectedRoutes = () => {
  const { currentUser } = useGlobalContext();
  return currentUser ? <Outlet /> : <Navigate to="signin" />;
};

export default ProtectedRoutes;
