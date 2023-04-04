import React from "react";
import styled from "styled-components";
import logo from "../img/logo/firaplatform-logo.svg";
import { GatsbyImage, getImageData } from "gatsby-plugin-image";

const MainBox = styled.div`
  display: flex;
  position: relative;
  padding: 80px 0px;
  background-color: #f6e2cf;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LayoutBox = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

const Title = styled.h2`
  padding: 0 28%;
  color: #075056;
  font-weight: 800;
  font-size: 40px;
`;

const GridItems = styled.div`
  display: grid;
  width: 100%;
  padding-right: 20%;
  grid-template-columns: repeat(4, 1fr);
  gap: 5%;
`;

const ItemLogo = styled.div`
  display: flex;
  max-width: 150px;
  aspect-ratio: 1;

  img {
    object-fit: cover;
  }
`;

const Partners = () => {
  return (
    <MainBox>
      <LayoutBox>
        <Title>We are trusted by our partners</Title>
        <GridItems>
          <ItemLogo>
            <img src={logo} />
          </ItemLogo>
          <ItemLogo>
            <img src={logo} />
          </ItemLogo>
          <ItemLogo>
            <img src={logo} />
          </ItemLogo>
          <ItemLogo>
            <img src={logo} />
          </ItemLogo>
          <ItemLogo>
            <img src={logo} />
          </ItemLogo>
          <ItemLogo>
            <img src={logo} />
          </ItemLogo>
          <ItemLogo>
            <img src={logo} />
          </ItemLogo>
          <ItemLogo>
            <img src={logo} />
          </ItemLogo>
        </GridItems>
      </LayoutBox>
    </MainBox>
  );
};

export default Partners;
