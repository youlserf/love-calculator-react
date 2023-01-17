import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../public/background.webp");
  background-size: cover;
`;

export const StyledH1 = styled.h1`
  color: yellow;
  background-color: black;
  border-radius: 5px;
  padding: 5px;
`;

export const StyledCardDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.542);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: white;
  font-weight: bold;
  font-size: 3vh;
  gap: 3px;
`;
