//import LogIn from './GetStartedComponents/LogIn';
import TowAreaS from './GetStartedComponents/TowAreaS';
import NavbarS from './GetStartedComponents/NavbarS';
import End from '../components/End';
//import { Navbar, TowArea } from "./components";

import styles from '../style';



function GetStartedPage() {
  return (
    <div className="bg-primary w-full overflow-hidden ">     
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>   
        <div className={`${styles.boxWidth}`}>   

          <NavbarS />  
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>    
        <div className={`${styles.boxWidth}`}>   
          <TowAreaS /> 
        </div>
      </div>
    
      <div className={`py-20 bg-primary ${styles.paddingX} ${styles.flexCenter}`}>  
        <div className={`${styles.boxWidth}`}>  

          <End />
        </div>
      </div>
    </div>
  );
}
      
export default GetStartedPage