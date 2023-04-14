import React, { useState } from "react";
import logo from "../img/logo/firaplatform-logo.svg";
import burger from "../../static/img/icon/burger.svg";
import arrow from "../../static/img/icon/arrow.svg";
import world from "../../static/img/icon/world.svg";
import Menu from "./menu";
import Language from "./language";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #f6f6f6e5;
  width: 100%;
  position: fixed;
  z-index: 30;
  border-radius: 0px 0px 30px 30px;

  @media (min-width: 1024px) {
    min-height: 80px;
    align-items: stretch;
    display: flex;
  }
`;

const NavMain = styled.nav`
  display: inline-flex;
  position: relative;
  margin: auto;
  padding: 0 100px;
  flex-grow: 1;
  width: auto;
`;

const NavBrand = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonBurger = styled.button`
  margin-right: 20px;
  background-color: transparent;
  border: 0px;
`;

const CompanyName = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  width: 100px;
  margin-left: 10px;
  color: #075056;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
`;

const ButtonBeOur = styled.button`
  margin-left: 30px;
  font-size: 18px;
  font-weight: 500;
  color: #ff3600;
  background-color: #f6f6f6e5;
  border-radius: 4px 23.5px 23.5px 45px;
  height: 45px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2));
  border: 2px solid #ff3600;
  padding: 5px 24px;
`;

const HelpCenter = styled.div`
  margin-left: 30px;
  font-size: 18px;
  font-weight: 500;
  color: #7c8387;
`;

const ButtonLanguage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-left: 30px;
  border: 0px;
  font-size: 18px;
  font-weight: 500;
  color: #7c8387;

  p {
    padding: 0px 5px;
  }
`;

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isActiveLanguge, setIsActiveLanguge] = useState(false);

  return (
    <Nav>
      <NavMain>
        <NavBrand>
          <ButtonBurger onClick={() => setIsActiveMenu(!isActiveMenu)}>
            <img src={burger}  alt="" />
          </ButtonBurger>
          <img src={logo} alt=""/>
          <CompanyName>{"Fira Platform"}</CompanyName>
        </NavBrand>
        <NavItems>
          <ButtonBeOur>{"Be Our Platform Man"}</ButtonBeOur>
          <HelpCenter>{"Help Center"}</HelpCenter>
          <ButtonLanguage onClick={() => setIsActiveLanguge(!isActiveLanguge)}>
            <img src={world} alt=""/>
            <p>{"English"}</p>
            <img src={arrow} alt=""/>
          </ButtonLanguage>
        </NavItems>
      </NavMain>
      <Menu active={isActiveMenu} />
      <Language active={isActiveLanguge} />
    </Nav>
  );
};

export default Navbar;
