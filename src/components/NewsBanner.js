import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styled/globalStyle";

const MainBox = styled.div`
  display: flex;
  position: relative;
  background-color: #daebe347;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;



const NewsBannerComponent = () => {
  return (
    <MainBox>
      <GlobalStyle />
      <h1>sdf</h1>
    </MainBox>
  );
};

export default NewsBannerComponent;
