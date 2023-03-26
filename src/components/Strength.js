import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import ItemStrength from "./grid/ItemStrength";
import GlobalStyle from "./styled/globalStyle";

const MainBox = styled.div`
  display: flex;
  background-color: #f6f6f6;
`;

const LayoutBox = styled.div`
  margin: 50px 20%;
  text-align: center;
  color: #075056;
`;

const GridItems = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 100px;
`;

const Strength = (props) => {
  return (
    <MainBox>
      <GlobalStyle />
      <LayoutBox>
        <h2>{"Why use the Platform?"}</h2>
        <GridItems>
          {props.items.map((item) => (
            <ItemStrength
              key={item.title}
              title={item.title}
              description={item.description}
              image={getImage(item.icon)}
            />
          ))}
        </GridItems>
      </LayoutBox>
    </MainBox>
  );
};

export default Strength;
