import React from "react";

const Button = ({ styles }) => (
  <button type="button" data-aos="flip-left" className={`transition duration-400 ease-in-out transform hover:-translate-y-3 hover:scale-110 py-4 px-6 font-poppins font-medium text-[18px] text-primary
   bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
    <logIn />
  </button>
);

export default Button;