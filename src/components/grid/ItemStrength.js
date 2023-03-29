import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Item = styled.div`
  padding: 10px;
  word-break: break-all;
  text-align: left;

  h2 {
    color: #075056;
    margin-left: 20px;
    font-size: 1.5vw;
  }

  h3 {
    font-size: 18px;
    color: #7c8387;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ItemStrength = (props) => {
  const { image, title, description } = props;
  return (
    <Item>
      <Title>
        <GatsbyImage image={image} alt="" />
        <h2>{title}</h2>
      </Title>
      <h3>{description}</h3>
    </Item>
  );
};

export default ItemStrength;
