import { Outlet, Navigate } from "react-router-dom";
import { useIpPublic } from "../hook/useIpPublic";
import { useAuth } from "../hook/AuthContext";
import { useEffect } from "react";

export default function Auth() {
  const { data: ipPublic } = useIpPublic();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const ipKnown = ipPublic !== undefined;
  const isAuthorized = (ipKnown && ipPublic === import.meta.env.VITE_IP_Server) || isLoggedIn;

  useEffect(() => {
    // Debug: log public IP and configured server IP for troubleshooting
    console.log("Auth debug:", "ipPublic=", ipPublic, "VITE_IP_Server=", import.meta.env.VITE_IP_Server);

    if (isAuthorized && !isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isAuthorized, isLoggedIn, setIsLoggedIn]);

  if (!ipKnown && !isLoggedIn) return null; // still checking

  if (!isAuthorized) return <Navigate to="/" replace />; // declarative redirect, prevents Outlet mount

  return <Outlet />;
}
