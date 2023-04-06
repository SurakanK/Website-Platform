import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styled/globalStyle";
import imageNew from "../banner/bannerNews.png";

const MainBox = styled.div`
  display: flex;
  position: relative;
  background-color: #daebe3;
  overflow: hidden;
`;

const LayoutBox = styled.div`
  margin: 80px 10%;
  width: 100%;
  text-align: center;

  h1 {
    font-weight: 600;
    font-size: 48px;
    color: #075056;
  }

  h3 {
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
    color: #7c8387;
  }
`;

const GridItems = styled.div`
  display: inline-grid;
  justify-items: center;
  margin-top: 60px;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
`;

const Item = styled.div`
  background: #ffffff;
  border: 3px solid #075056;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px 16px 16px 16px;
  max-width: 270px;

  h2 {
    padding: 5%;
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    color: #075056;
  }
`;

const ItemFooter = styled.div`
  display: flex;
  padding: 5%;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    color: #ff3600;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    color: #7c8387;
  }
`;

const NewsBannerComponent = () => {
  return (
    <MainBox>
      <GlobalStyle />
      <LayoutBox>
        <h1>Latest News Update</h1>
        <h3>
          This platform that brings together various and quality services for
          you.
        </h3>
        <GridItems>
          <Item>
            <img src={imageNew} alt="" />
            <h2>
              This platform that brings together various and quality services
              for you.
            </h2>
            <ItemFooter>
              <h4>22/02/23</h4>
              <h3>Read more</h3>
            </ItemFooter>
          </Item>
          <Item>
            <img src={imageNew} alt="" />
            <h2>
              This platform that brings together various and quality services
              for you.
            </h2>
            <ItemFooter>
              <h4>22/02/23</h4>
              <h3>Read more</h3>
            </ItemFooter>
          </Item>
          <Item>
            <img src={imageNew} alt="" />
            <h2>
              This platform that brings together various and quality services
              for you.
            </h2>
            <ItemFooter>
              <h4>22/02/23</h4>
              <h3>Read more</h3>
            </ItemFooter>
          </Item>
          <Item>
            <img src={imageNew} alt="" />
            <h2>
              This platform that brings together various and quality services
              for you.
            </h2>
            <ItemFooter>
              <h4>22/02/23</h4>
              <h3>Read more</h3>
            </ItemFooter>
          </Item>
          <Item>
            <img src={imageNew} alt="" />
            <h2>
              This platform that brings together various and quality services
              for you.
            </h2>
            <ItemFooter>
              <h4>22/02/23</h4>
              <h3>Read more</h3>
            </ItemFooter>
          </Item>
          <Item>
            <img src={imageNew} alt="" />
            <h2>
              This platform that brings together various and quality services
              for you.
            </h2>
            <ItemFooter>
              <h4>22/02/23</h4>
              <h3>Read more</h3>
            </ItemFooter>
          </Item>
          <Item>
            <img src={imageNew} alt="" />
            <h2>
              This platform that brings together various and quality services
              for you.
            </h2>
            <ItemFooter>
              <h4>22/02/23</h4>
              <h3>Read more</h3>
            </ItemFooter>
          </Item>
        </GridItems>
      </LayoutBox>
    </MainBox>
  );
};

export default NewsBannerComponent;
