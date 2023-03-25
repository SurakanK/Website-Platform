import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 4px 32px 32px 32px;
  border: 2px solid #075056;
  max-width: 220px;
  height: 75px;
  padding: 15px;
  margin-right: 20px;
`;

const Logo = styled.img`
  max-width: 25%;
  text-align: center;
  font-size: 28px;
  margin-right: 7px;
`;

const Title = styled.div`
  text-align: left;

  .title {
    color: #075056;
    font-size: 15px;
    text-transform: capitalize;
  }
  .header {
    font-size: 25px;
    text-transform: capitalize;
  }
`;

const ButtonDownLoad = (props) => {
  const { image, header, title } = props;

  return (
    <Button>
      <Logo src={image} />
      <Title>
        <p className="title">
          {title}
          <p className="header">{header}</p>
        </p>
      </Title>
    </Button>
  );
};

export default ButtonDownLoad;
