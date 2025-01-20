import React, { createContext, useState } from 'react';

export const LawyerContext = createContext();

export const LawyerProvider = ({ children }) => {
  const [lawyerData, setLawyerData] = useState({});

  return (
    <LawyerContext.Provider value={{ lawyerData, setLawyerData }}>
      {children}
    </LawyerContext.Provider>
  );
};
