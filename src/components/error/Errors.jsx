import React from "react";
import { useNavigate } from 'react-router-dom';
import Error from '../../web_images/error.jpg';

const Errors = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="py-36 flex justify-center items-center flex-col">
      <img src={Error} alt="error" />
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default Errors;
