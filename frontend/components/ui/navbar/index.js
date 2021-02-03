import Link from "next/link";
import styled from "styled-components";
import React, { useState } from "react";
import { COLORS } from "../../../styles/colors";

// import MenuIcon from "../../hamburgerMenu/index";
// HamburgerMenu svg can be used in place of the current → being used

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  // toogleMenu sets the menu to true which allows for conditional rendoring on the Nav items
  // on initial load there is currently a temporary "Catch Phrase", once the user hits the →
  // it sets memu to true, which renders the navbar items
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Nav className='navbar'>
        <Link href='/'>
          <img src='imgs/logo.png' />
        </Link>
      </Nav>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: white;
  position: relative;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  letter-spacing: 2.5px;
  font-size: 15px;
  height: 100px;
  :hover {
    cursor: pointer;
  }
`;
