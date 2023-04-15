import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: block;
  position: absolute;
  padding: 5px 10%;
  top: 100%;
  width: 100%;

  display: ${(props) => (props.active ? "block" : "none")};
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
  transition-duration: 0.4s;
  font-size: 18px;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  background-color: ${(props) => (props.clicked ? "  #ffdecd" : "#ffffff")};
  color: ${(props) => (props.clicked ? " #ff3600" : "#243037")};

  @media (max-width: 1024px) {
    h3 {
      font-size: 12px;
    }
  }
`;

const ListItems = styled.div`
  display: grid;
  width: 100%;
  padding: 1vw 2vw;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw 3vw;
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

  @media (max-width: 1024px) {
    h2 {
      font-size: 12px;
    }

    h3 {
      font-size: 10px;
    }
  }
`;

const useSiteMetadataNavMenu = () => {
  const data = useStaticQuery(
    graphql`
      query navMenu {
        markdownRemark(frontmatter: { templateKey: { eq: "menu" } }) {
          frontmatter {
            navMenuList {
              title
              link {
                text
                title
              }
            }
          }
        }
      }
    `
  );
  return data.markdownRemark.frontmatter;
};

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
            <LinkItem key={index}>
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
