import styled from "styled-components";

 
export const ServiceContainerBox = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial,Arial,Helvetica,sans-serif;;
`;

export const ServiceHeading = styled.h2`
    font-size: 34px;
    margin: 0px;
    padding: 10px 0px;
    color: #007bff;
`;

export const ServiceDescription = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  padding-bottom: 20px;
`;

export const OurServices = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;