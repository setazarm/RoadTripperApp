import { NavLink } from "react-router-dom";
import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <NavLink to="/">Logo</NavLink>
      <NavLink to ="/about">About</NavLink>
      <NavLink to ="/login">Login</NavLink>
    </nav>
  );
};

export default Navbar;
