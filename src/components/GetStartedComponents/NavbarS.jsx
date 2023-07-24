import { logo } from "../../assets";

const NavbarS = () => {
  

  return (
    <header className="justify-between flex justify-between py-5 uppercase header"> 
      <img src={logo} alt="hoobank" className=" w-[124px] h-[32px]" />  
    </header>
  );
};

export default NavbarS;