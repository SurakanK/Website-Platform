import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { useSiteMetadataService } from "../templates/service-page";
import GlobalStyle from "./styled/globalStyle";

const MainBox = styled.div`
  display: flex;
  background-color: #faece2;
`;

const BGBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #faece2;
  width: 100%;
  height: 500px;
`;

const Circles1 = styled.div`
  position: absolute;
  background-color: #f9d9bbcc;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(-50%, 0%);
`;

const Circles11 = styled.div`
  background-color: #ff3600;
  margin: 10%;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const Circles2 = styled.div`
  border: 3px solid #a3d9bf;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(50%, 0%);
`;

const Circles22 = styled.div`
  margin: 10%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #409ba3;
`;

const LayoutBox = styled.div`
  margin: 50px 20%;
  text-align: center;
  color: #075056;
`;

const GridItems = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 100px;
`;

const ServiceList = () => {
  const { services, text, title } = useSiteMetadataService();
  console.log(services);
  return (
    <MainBox>
      <GlobalStyle />
      <LayoutBox>
        <h2>Quality Service For Quality Life</h2>
        <h3>
          We have three main categories of quality services and will expand in
          the future to cover your needs.
        </h3>
        <GridItems>
          <h2>Quality Service For Quality Life</h2>
          <h2>Quality Service For Quality Life</h2>
          <h2>Quality Service For Quality Life</h2>
          <h2>Quality Service For Quality Life</h2>
        </GridItems>
        
      </LayoutBox>
    </MainBox>
  );
};

export default ServiceList;
