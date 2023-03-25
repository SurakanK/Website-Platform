import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import GlobalStyle from "./styled/globalStyle";
import ButtonDownLoad from "./button/ButtonDownLoad";

import appstoreLogo from "../img/logo/appstore-logo.svg";
import googleplayLogo from "../img/logo/googleplay-logo.svg";

const MainBox = styled.div`
  display: grid;
  align-items: center;
  position: relative;
`;

const HeadingBox = styled.div`
  position: absolute;
  top: 26%;
  left: 30%;
  width: 28%;
  transform: translate(-50%, 0%);
`;
const HeadingText = styled.h1`
  color: #075056;
`;
const SubHeadingText = styled.h3`
  color: #075056;
`;

const ButtonBox = styled.div`
  margin-top: 50px;
  display: flex;
`;

export default function FullWidthImage(props) {
  const { img, heading, subheading } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <MainBox>
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
        <HeadingBox>
          <HeadingText>{heading}</HeadingText>
          <SubHeadingText>{subheading}</SubHeadingText>
          <ButtonBox>
            <ButtonDownLoad image={appstoreLogo} title={"Download on the"} header={"Appp Store"}/>
            <ButtonDownLoad image={googleplayLogo} title={"Get it on"} header={"Google Play"}/>
          </ButtonBox>
        </HeadingBox>
      </MainBox>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
