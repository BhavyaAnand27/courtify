// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";

// export const AppContext = createContext();

// const AppContextProvider = (props) => {
//   const currencySymbol = "₹";
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [lawyers, setLawyers] = useState([]);  // State to store the list of lawyers
//   const [token, setToken] = useState(
//     localStorage.getItem("token") ? localStorage.getItem("token") : ""
//   );
//   const [userData, setUserData] = useState(null); // State for the logged-in user's data

//   // Getting Lawyers using API
//   const getLawyersData = async () => {  
//     try {
//       const { data } = await axios.get(backendUrl + "/api/lawyer/list");  // API endpoint to get lawyers
//       if (data.success) {
//         setLawyers(data.lawyers);  // Store lawyers' data
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   // Getting User Profile using API
//   const loadUserProfileData = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
//         headers: { token },
//       });

//       if (data.success) {
//         setUserData(data.userData);  // Store user profile data
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getLawyersData();  // Fetch the list of lawyers when the component mounts
//   }, []);

//   useEffect(() => {
//     if (token) {
//       loadUserProfileData();  // Load user data if the token exists
//     }
//   }, [token]);

//   const value = {
//     lawyers,  // Expose the lawyers' list to be used by other components
//     getLawyersData,  // Provide the function to fetch lawyers' data
//     currencySymbol,
//     backendUrl,
//     token,
//     setToken,  // Function to update the token
//     userData,  // Expose the user data to be used by other components
//     setUserData,  // Function to update the user data
//     loadUserProfileData,  // Expose the function to fetch the user profile data
//   };

//   return (
//     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//   );
// };

// export default AppContextProvider;


import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// Create the context
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";
  // const backendUrl = import.meta.env.VITE_BACKEND_URL;  // Fetch the backend URL from .env
  const backendUrl = "http://localhost:5174";  // Replace with your actual backend URL

  // State to store data
  const [lawyers, setLawyers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");
  const [userData, setUserData] = useState(null);

  // Log the backend URL to ensure it's fetched properly
  console.log("Backend URL: ", backendUrl);  // Make sure this is not undefined or empty

  // Fetch Lawyers data
  const getLawyersData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/lawyer/list`);  // API endpoint for lawyers list
      if (data.success) {
        setLawyers(data.lawyers);  // Set lawyers data in state
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Fetch User Profile data
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { token },  // Sending the token in the request header
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

  // Fetch data when the component mounts
  useEffect(() => {
    getLawyersData();  // Fetch the list of lawyers when the component mounts
  }, []);

  // Load user data when the token changes
  useEffect(() => {
    if (token) {
      loadUserProfileData();  // Fetch user data if a token is available
    }
  }, [token]);

  // Context value that will be provided to the child components
  const value = {
    lawyers,  // Available list of lawyers
    getLawyersData,  // Function to fetch the list of lawyers
    currencySymbol,
    backendUrl,  // Backend URL from environment variable
    token,
    setToken,  // Function to update token
    userData,  // User data (profile)
    setUserData,  // Function to update user data
    loadUserProfileData,  // Function to fetch user profile data
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
