import styles from './style';
//import { Navbar } from './components';
//import Navbar from './components/Navbar';
//import Hero from './components/Hero';
//import Stats from './components/Stats';
import { Navbar, ThreeArea, TowArea, FourArea, FiveArea, SexArea, SevenArea, EightArea, NineArea, End } from "./components";

//import { Routes, Route } from 'react-router-dom';

//import {useNavigate} from 'react-router-dom';


//import { createRoot } from "react-dom/client";
//import { BrowserRouter } from "react-router-dom";

//const root = createRoot(document.getElementById("root"));

const App = () => (
  // here we start to buld our structure, so we had ben create the back ground and then we call the components one by one.
  /*
  <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="/LogIn" element={<LogIn />} />
  */
    <div className="bg-primary w-full overflow-hidden ">     {/* by this div we create the navbar calor and shape. with w-full we say that the nav bar must be all over the site, bg-brimary is an ready function to set the color for background, overflow-hidden this fun just helping to make the navbar more clear/ if we remove it it semes that nothing change but its important */}  
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>     {/* this div we had been used it just to warp our navbar, the power of tailwind appaer right here  */}
        <div className={`${styles.boxWidth}`}>      {/* giving a full width for the box */}

          <Navbar />    {/* calling the navbar func */}
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>     {/* this is for the 2. section */}
        <div className={`${styles.boxWidth}`}>     {/* this is the inner div to set the full width for the box */}

          <TowArea /> 
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>    {/* this is for the 3. section */}
        <div className={`${styles.boxWidth}`}>    {/* set all the components right here */}

          <ThreeArea /> 
          <FourArea />
          <FiveArea /> 
          <SexArea />
          <SevenArea /> 
          <EightArea />
          <NineArea />
          <End />
        </div>
      </div>
    </div>
  //</Routes>
);

export default App;