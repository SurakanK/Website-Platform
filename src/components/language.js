import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  padding-top: 5px;
  top: 80px;
  right: 100px;

  ${(props) => props.active} {
    display: none;
  }
`;

const Contaner = styled.div`
  display: grid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgb(246, 246, 246, 0.9);
  overflow: hidden;
  backdrop-filter: blur(5px);
  border-radius: 4px 16px 16px 16px;
`;

const LanButton = styled.button`
  border: none;
  padding: 15px 35px;
  border-radius: 4px 16px 16px 16px;
  transition-duration: 0.4s;

  background-color: #ffffff;
  color: #7c8387;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    background-color: #ffdecd;
  }

  ${(props) => !props.select} {
    color: #ff3600;
    background-color: #ffdecd;
  }
`;

const Language = (data) => {
  const { active } = data;
  const [selectLang, setSelectLang] = useState("EN");

  return (
    <Main active={active}>
      <Contaner>
        <LanButton
          select={selectLang === "EN" ? true : false}
          onClick={() => setSelectLang("EN")}
        >
          English
        </LanButton>
        <LanButton
          select={selectLang === "TH" ? true : false}
          onClick={() => setSelectLang("TH")}
        >
          ไทย
        </LanButton>
      </Contaner>
    </Main>
  );
};

export default Language;
