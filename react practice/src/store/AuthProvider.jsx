import React from "react";
import { AuthContext, useAuth } from ".";
import { useState, useEffect } from "react";
import { getAuthUser } from "../api/auth";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

export default function AuthProvider({ children }) {
  const [userToken, setUserToken] = useLocalStorage("userAccessToken", null);
  const [refreshToken, setRefreshToken] = useLocalStorage(
    "userRefreshToken",
    null
  );
  const [user, setUser] = useState({
    isError: null,
    data: null,
    isAuthenticated: false,
  });
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);

  useEffect(() => {
    const getAuth = async () => {
      if (!userToken) return;
      try {
        setIsCheckingAuth(true);
        const res = await getAuthUser(userToken);
        if (res.status === 200) {
          setUser({
            isError: null,
            isAuthenticated: true,
            data: res.data,
          });
        }
      } catch (error) {
        console.log(error);
        setUser({
          isError: error.response.data.message,
          isAuthenticated: false,
          data: null,
        });
      } finally {
        setIsCheckingAuth(false);
      }
    };
    getAuth();
  }, [userToken, setIsCheckingAuth]);
  const handleLogout = () => {
    setUserToken(null);
    setRefreshToken(null);
    setUser({
      isError: null,
      isAuthenticated: false,
      data: null,
    });
    toast.success("logged out");
  };

  console.log({ userToken, refreshToken });

  return (
    <AuthContext.Provider
      value={{ user, isCheckingAuth, setUserToken, setRefreshToken, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
