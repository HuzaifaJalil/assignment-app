import styled from "styled-components";

export const DisclaimerContainer = styled.div`
  display: flex;
  padding: 20px 100px;
  align-items: baseline;
`;

export const DisclaimerOuterContainer = styled.div`
  flex: 60%;
  padding: 0px 35px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #007bff;
`;

export const Description = styled.p`
  margin-bottom: 10px;
`;

export const Logo = styled.img`
  max-width: 40%;
  height: auto;
  filter: brightness(0);
`;

export const ServicesOuterContainer = styled.div`
  flex: 20%;
  padding: 0px 20px;
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #007bff;
`;
  
export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  transition: padding-left 0.7s ease;

  &::before {
    content: "➤";
    margin-right: 5px;
    color: black;
  }

  &:hover {
    padding-left: 5px;
    cursor: pointer;
    color: rgb(94 165 213 / 70%);
  }
`;

export const ContactsOuterContainer = styled.div`
  flex: "20%";
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const ContactsTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #007bff;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  & > svg {
    margin-right: 5px;
  }
`;
