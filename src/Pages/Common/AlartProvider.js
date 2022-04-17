import React from "react";
import {
  positions,
  Provider as AlertProvider,
  transitions,
} from "react-alert";

const AlartProvider = ({ children }) => {
  const AlertTemplate = ({ message }) => (
    <div className='bg-white text-xl mt-52 shadow-md px-5 py-1 rounded-md'>
      {message}
    </div>
  );
  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "20px",
    transition: transitions.SCALE,
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      {children}
    </AlertProvider>
  );
};

export default AlartProvider;
