import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styled/globalStyle";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useSiteMetadataAllService } from "../templates/allService";

const MainBox = styled.div`
  display: flex;
  position: relative;
  background-color: #ff3600;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LayoutBox = styled.div`
  margin: 30px 20%;
  text-align: center;

  h2 {
    color: #ffffff;
    font-weight: 600;
    font-size: 48px;
  }

  h3 {
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
    color: #f6f6f6;
  }
`;

const GridItems = styled.div`
  display: grid;
  margin: 60px;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
`;

const Item = styled.div`
  display: flex;
  position: relative;
  border-radius: 4px 32px 32px 32px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.1));
  overflow: hidden;
  transition-duration: 0.4s;
  background: #fff;

  img {
    object-fit: cover;
    scale: 1.1;
  }

  &:hover {
  }

  grid-row: ${(props) => props.row || "span 1"};
`;

const ItemHover = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f58a2b99;
  opacity: 0;

  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  h2 {
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
  }
`;

const MoreButton = styled.button`
  background: #ff3600;
  margin-bottom: 25px;
  margin-top: 20px;
  padding: 15px 40px;
  border: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px 32px 32px 32px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

const AllServiceButton = styled.button`
  background: #ff3600;
  margin-bottom: 25px;
  margin-top: 20px;
  padding: 15px 40px;
  border: none;
  border: 2px solid #ffffff;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2));
  border-radius: 4px 32px 32px 32px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

const AllServiceBanner = () => {
  const { title, text, allService } = useSiteMetadataAllService();

  console.log(allService);
  return (
    <MainBox>
      <GlobalStyle />
      <LayoutBox>
        <h2>{title}</h2>
        <h3>{text}</h3>
        <GridItems>
          {allService.map((service, index) => (
            <Item
              row={
                index === 1
                  ? "span 3"
                  : index === 2 || index === 3
                  ? "span 2"
                  : "span 1"
              }
              key={index}
              itemHover={ItemHover}
            >
              <GatsbyImage image={getImage(service.card.image)} alt="" />
              <ItemHover>
                <h2>{service.title}</h2>
                <MoreButton>Detail</MoreButton>
              </ItemHover>
            </Item>
          ))}
        </GridItems>
        <AllServiceButton>View More Service</AllServiceButton>
      </LayoutBox>
    </MainBox>
  );
};

export default AllServiceBanner;
