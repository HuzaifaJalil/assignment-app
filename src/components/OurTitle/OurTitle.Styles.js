import styled from 'styled-components';

export const OurTitleWrapper = styled.div`
  max-width: 300px;
  padding: 50px;
  text-align: left;
  padding: 0;
`; 

export const Heading = styled.h1`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(180deg, #000000f0, #007bff);
  -webkit-background-clip: text;
  color: transparent;
`;

export const Description = styled.p`
  width: 320px;
  font-size: 17px;
  color: #007bff;
`;

export const LiveChatButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.7s;

  &:hover {
    background-color: #145dab;
  }
`; 