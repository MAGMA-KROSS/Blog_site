import { createContext, useState, useEffect } from "react";
import API from "../utils/API";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/auth/me", { withCredentials: true }) // ✅ Ensure cookies are sent
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const login = async (credentials) => {
    await API.post("/auth/login", credentials, { withCredentials: true }); // ✅ Ensure cookies are set
    const res = await API.get("/auth/me", { withCredentials: true }); // ✅ Fetch user details
    setUser(res.data);
  };

  const logout = async () => {
    await API.get("/auth/logout", { withCredentials: true }); // ✅ Ensure cookies are cleared
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
