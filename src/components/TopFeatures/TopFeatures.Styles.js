import styled from "styled-components";

export const TopFeaturesContainer = styled.div`
  font-family: Arial, Arial, Helvetica, sans-serif;
  padding: 40px 0px;
`;

export const TopHeading = styled.h1`
  color: #007bff;
  text-align: center;
  font-size: 32px;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 0px 40px;
  padding-bottom: 10px;
`;

export const FlexContainer = styled.div`
  padding: 0px 40px;
  display: flex;

  @media (max-width:900px){
    flex-direction: column-reverse;
  }
`;

export const LeftDivision = styled.div`
  display: flex;
  flex: 40%;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;


`;

export const RightDivision = styled.div`
  display: flex;
  flex: 60%;
  /* align-items: center; */
  justify-content: space-around;
  flex-direction: column;
`;

export const InnerRightDivision = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width:900px){
    flex-direction: column;
    align-items: center;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;

  @media (max-width:900px){
    padding: 20px;
  }
`;

export const FeatureLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  background-color: #007bff;
  border-radius: 10px 0px;
`;

export const FeatureLogo = styled.img`
  height: 40px;
  width: 40px;
  filter: brightness(0) invert(1) grayscale(1);
  object-fit: contain;
`;

export const FeatureDescription = styled.div`
  margin-top: 8px;
  /* Additional styles for the description */
`;
