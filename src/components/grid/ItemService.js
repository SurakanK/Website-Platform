import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 320px;
  /* height: 300px; */
  position: relative;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid ${(props) => (props.color ? props.color : "white")};
  border-radius: 8px 32px 32px 32px;
  overflow: hidden;
`;

const Circles = styled.div`
  position: absolute;
  right: 0px;
  width: 65%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(50%, -50%);
  background-color: ${(props) => (props.color ? props.color : "white")};
`;

const Number = styled.h1`
  position: absolute;
  bottom: 10%;
  left: 15%;
  font-weight: 500;
  font-size: 48px;
  color: white;
`;

const Layout = styled.div`
  margin: 13% 8%;

  h2 {
    margin-top: 10px;
    font-size: 30px;
  }

  h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 500px;
  }
`;

const ItemService = (props) => {
  const { image, title, text, color, index } = props;
  return (
    <Item color={color}>
      <Circles color={color}>
        <Number>{`0${index + 1}`}</Number>
      </Circles>
      <Layout>
        <GatsbyImage image={image} alt="" />
        <h2>{title}</h2>
        <h3>{text}</h3>
      </Layout>
      {/* <Title>
        <GatsbyImage image={image} alt="" />
        <h2>{title}</h2>
      </Title>
      <h3>{text}</h3> */}
    </Item>
  );
};

export default ItemService;
