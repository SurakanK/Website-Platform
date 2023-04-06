import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styled/globalStyle";
import { ButtonStyle1 } from "./button/Button";

const MainBox = styled.div`
  display: flex;
  position: relative;
  background-color: #075056;
  overflow: hidden;
`;

const LayoutBox = styled.div`
  margin: 50px 25%;
  width: 100%;
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 48px;
    color: #ffffff;
  }
`;

const LayoutInput = styled.div`
  margin-top: 40px;
`;

const Input = styled.input`
  height: 60px;
  width: 450px;
  background-color: #ffffff26;
  background-image: url("/img/icon/mail.svg");
  background-position: 25px 50%;
  background-repeat: no-repeat;
  padding-left: 60px;
  padding-right: 25px;
  border-radius: 50px;
  border: none;

  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;

  ::placeholder {
    color: #FFFFFF80;
  }
`;

const SubscribeBannerComponent = () => {
  return (
    <MainBox>
      <GlobalStyle />
      <LayoutBox>
        <h1>Subscribe to Our Newsletter For Weekly Article Update.</h1>
        <LayoutInput>
          <Input placeholder="Enter your e-mail address" />
          <ButtonStyle1
            style={{ marginLeft: "20px" }}
            colorBg={"#FF3600"}
            colotText={"#FFFFFF"}
          >
            Subscribe
          </ButtonStyle1>
        </LayoutInput>
      </LayoutBox>
    </MainBox>
  );
};

export default SubscribeBannerComponent;
