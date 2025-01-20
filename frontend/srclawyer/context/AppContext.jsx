import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = "₹"; // Indian Rupee symbol
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // States for managing application data
  const [lawyers, setLawyers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(false);

  // Fetch the list of lawyers from the API
  const getLawyersData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/lawyer/list`);
      if (data.success) {
        setLawyers(data.lawyers);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch lawyers.");
    }
  };

  // Fetch the user profile from the API
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token },
      });
      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load user profile.");
    }
  };

  // Fetch lawyers' data on component mount
  useEffect(() => {
    getLawyersData();
  }, []);

  // Load user profile whenever the token changes
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
  }, [token]);

  // Context value to provide throughout the application
  const value = {
    lawyers,
    getLawyersData,
    currencySymbol,
    backendUrl,
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
