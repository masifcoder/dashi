import { useState } from "react";

import AuthContext from "./AuthContext";
import axios from "axios";



const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);


  // login
  const login = async (credentials) => {
    setLoading(true);
    try {

      const response = await axios.post("http://localhost:9001/user/admin-login", credentials);

      const data = response.data;


      // local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user);

      // states update
      setUser(data.user);
      setToken(data.token);


      setLoading(false);
      return { status: "OK" };

    } catch (error) {

      console.log(error);
      setLoading(false);
      return { status: "FAIL", message: error.message };

    }
  }

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);

  }

  return (
    <AuthContext.Provider value={{ login, user, token, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider