import styled from "styled-components";
import introBackgroundImage from "../../images/intro-background.png";

export const IntroContainer = styled.div`
  display: flex;
  height: 80vh;
  background: url(${introBackgroundImage}) no-repeat center center;
  background-size: 450px;
  font-family: Arial, Arial, Helvetica, sans-serif;

  @media (max-width: 750px) {
    flex-direction: column;
    height: 150vh;
  }
`;

export const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(0); 

  &:hover {
    cursor: pointer;
    transform: translateX(100px); 
    transition: transform 1s ease-in-out; 
  }
`;

export const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`; 
