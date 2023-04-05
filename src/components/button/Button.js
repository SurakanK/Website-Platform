import styled from "styled-components";

export const ButtonStyle1 = styled.button`
 
  background: ${(props) => props.colorBg || "#F6F6F6E5"};
  border: ${(props) => props.borderBg || "none"};
  color: ${(props) => props.colotText || "#000000"};

  margin-top: 50px;
  padding: 15px 25px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px 32px 32px 32px;
  font-weight: 700;
  font-size: 18px;
`;