import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styled/globalStyle";

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SubBox = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const Border = styled.div`
  padding: 35px;
  border-radius: 16px 64px 64px 64px;
  border: 4px solid #075056;
  max-width: 544px;

  h2 {
    color: #075056;
  }

  h3 {
    margin-top: 10px;
    color: #7C8387;
  }
`;

const SubHeader = (props) => {
  const { img, title, description } = props;
  return (
    <MainBox>
      <GlobalStyle />
      <GatsbyImage
        image={img}
        objectFit={"cover"}
        objectPosition={"top left"}
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        aspectratio={3 / 1}
        alt=""
        formats={["auto", "webp", "avif"]}
      />
      <SubBox>
        <Border>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </Border>
      </SubBox>
    </MainBox>
  );
};

export default SubHeader;
