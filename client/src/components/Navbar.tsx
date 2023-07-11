import  { FC, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import MenuItem from "./MenuItem";
import "../style.css";
const Navbar: FC = () => {
  const[menu,setMenu]=useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <nav>
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <div className="desktop">
      <MenuItem/>
      </div>
      <button className="navbar-button" onClick={toggleMenu}>{menu ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}</button>
        {menu&&<MenuItem className="mobile"/>}
    </nav>
  )
  
};

export default Navbar;
