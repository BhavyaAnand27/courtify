import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [lawyers, setLawyers] = useState([]);  // State to store the list of lawyers
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [userData, setUserData] = useState(null); // State for the logged-in user's data

  // Getting Lawyers using API
  const getLawyersData = async () => {  
    try {
      const { data } = await axios.get(backendUrl + "/api/lawyer/list");  // API endpoint to get lawyers
      if (data.success) {
        setLawyers(data.lawyers);  // Store lawyers' data
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Getting User Profile using API
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });

      if (data.success) {
        setUserData(data.userData);  // Store user profile data
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getLawyersData();  // Fetch the list of lawyers when the component mounts
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();  // Load user data if the token exists
    }
  }, [token]);

  const value = {
    lawyers,  // Expose the lawyers' list to be used by other components
    getLawyersData,  // Provide the function to fetch lawyers' data
    currencySymbol,
    backendUrl,
    token,
    setToken,  // Function to update the token
    userData,  // Expose the user data to be used by other components
    setUserData,  // Function to update the user data
    loadUserProfileData,  // Expose the function to fetch the user profile data
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
