//import { Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Button(){
  
  const navigate = useNavigate();
  /*
  function Done(){
    //<Route path="/LogIn" element={<LogIn />} />
    navigate(props.path, {replace: true});
  }
  */

  return(

    <button type="button" onClick={() => navigate('/GetStartedPage')} data-aos="flip-left" className={`transition 
      duration-400 ease-in-out transform hover:-translate-y-3 
      hover:scale-110 py-4 px-6 font-poppins font-medium text-[18px] 
      text-primary bg-blue-gradient rounded-[10px] outline-none`}>
      Get Started 
    </button>



  );
}

export default Button;