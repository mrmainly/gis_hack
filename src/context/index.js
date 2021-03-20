import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
      setUserLoading(true);
      const { data } = await axios.get("/api/user/get_profile");
      console.log(data);
      setUser(data.data);
      setUserLoading(false);
    } catch (err) {
      setUserLoading(true);
    }
  };

  const value = {
    user,
    userLoading,
    getUser,
  };
  
  return <Context.Provider value={value}>{children}</Context.Provider>;

};

export default Provider;