import React, { createContext, useState } from "react";

// Creating a context to share user data globally
export const UserContext = createContext();

// UserProvider component to provide the context value
export const UserProvider = ({ children }) => {
  // State to manage user data
  const [user, setUser] = useState(null);

  // Returning the provider with user data and setter function
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
