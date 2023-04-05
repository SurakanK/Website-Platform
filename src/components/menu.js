import React, { useState } from "react";
import styled from "styled-components";
import { useSiteMetadataNavMenu } from "../templates/menu";

const Main = styled.div`
  display: block;
  position: absolute;
  padding: 5px 10%;
  top: 80px;
  width: 100%;

  ${(props) => props.active} {
    display: none;
  }
`;

const Contaner = styled.div`
  display: flex;
  background-color: rgb(246, 246, 246, 0.9);
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  border-radius: 4px 32px 32px 32px;
`;

const ListMenu = styled.div`
  display: grid;
  min-height: 200px;
  width: 20%;
`;

const ListButton = styled.button`
  border: none;
  text-align: left;
  padding-left: 20%;
  border-radius: 0px 10px 10px 10px;
  transition-duration: 0.4s;

  background-color: #ffffff;
  color: #243037;

  &:hover {
    background-color: #ffdecd;
  }

  h3 {
    font-size: 20;
    font-weight: 600;
  }

  ${(props) => !props.clicked} {
    color: #ff3600;
    background-color: #ffdecd;
  }
`;

const ListItems = styled.div`
  display: grid;
  width: 100%;
  padding: 15px 40px;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px 70px;
`;

const LinkItem = styled.div`
  color: #7c8387;

  &:hover {
    h2 {
      color: #ff3600;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 18px;
  }

  h3 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 13px;
  }
`;

const Menu = (data) => {
  const { active } = data;
  const { navMenuList } = useSiteMetadataNavMenu();
  const [selectMenu, setSelectMenu] = useState(0);

  const onClickSelect = (index) => {
    setSelectMenu(index);
  };

  return (
    <Main active={active}>
      <Contaner>
        <ListMenu>
          {navMenuList.map((menu, index) => (
            <ListButton
              key={index}
              clicked={selectMenu === index ? true : false}
              onClick={() => onClickSelect(index)}
            >
              <h3>{menu.title}</h3>
            </ListButton>
          ))}
        </ListMenu>
        <ListItems>
          {navMenuList[selectMenu].link.map((data, index) => (
            <LinkItem
              key={index}
            >
              <h2>{data.title}</h2>
              <h3>{data.text}</h3>
            </LinkItem>
          ))}
        </ListItems>
      </Contaner>
    </Main>
  );
};

export default Menu;
