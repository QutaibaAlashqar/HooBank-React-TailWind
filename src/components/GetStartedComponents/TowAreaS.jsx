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
        <div className="absolute z-[1] w-[100%] h-[0%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[100%] h-[100%] right-50 bottom-50 blue__gradient" />
      <div className=" flex flex-row items-center py-[5px] px-4 bg-discount-gradient rounded-[10px]">
        <img src={discount} alt="discount" className=" animate-bounce w-[32px] h-[30px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="animate-bounce text-white ">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
        
      </div>

      <section className="flex md:flex-row flex-col text-white sm:py-16 gap-16">
        <div>
          <h1 className="ss:text-[25px] text-[25px] text-white ss:leading-[100.8px] w-full" data-aos="flip-up"> Let's go! Let's assess everything jointly. </h1>
          <p className={`font-poppins text-white text-[15px] max-w-[700px] py-5`} data-aos="flip-up">
            Welcome, We can collaborate with you to put the best 
            possible solutions. 
            </p>
        </div>

        <div className="map" data-aos="flip-up">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.1957694460402!2d32.84765585815712!3d39.937010448191515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34ef42150b42d%3A0xa93a64d9fd769621!2sGen%C3%A7lik%20Park!5e0!3m2!1sen!2str!4v1690272478697!5m2!1sen!2str" 
           width="600" height="180" allowfullscreen="yes" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

        </iframe>

        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default TowAreaS;