import styles from "../../style";
import { discount } from "../../assets";
//import GetStarted from "./component";
import ContactForm from "./ContactForm";


import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TowAreaS = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  
  return (

   
    <div data-aos="fade-right" className={`flex-1 ${styles.flexStart} flex-col xl:px-0 px-16 py-20`}>
      <div className=" flex flex-row items-center py-[5px] px-4 bg-discount-gradient rounded-[10px]">
        <img src={discount} alt="discount" className=" animate-bounce w-[32px] h-[30px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="animate-bounce text-white ">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
        
        <div className="absolute z-[1] w-[100%] h-[0%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[100%] h-[100%] right-50 bottom-50 blue__gradient" />
      </div>

      <div>
        <h1 className="ss:text-[25px] text-[25px] text-white ss:leading-[100.8px] w-full"> Let's go! Let's assess everything jointly. </h1>
        <p className={`font-poppins text-white text-[15px] max-w-[700px] py-5`}>
          Welcome, We can collaborate with you to put the best 
          possible solutions. 
          
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default TowAreaS;