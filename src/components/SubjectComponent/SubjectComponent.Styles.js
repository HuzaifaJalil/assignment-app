import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: aqua; */
  padding: 20px 100px;

  @media (max-width:500px) {
    padding: 20px;
  }
`;

export const Heading = styled.h2`
  color: #007bff;
  margin: 0;
  padding: 10px 0px;
  text-align: center;
  font-size: 32px;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 18px;
  padding: 40px 0px;
  margin: 0px;
`;

export const SubjectsOuterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;

  @media (max-width:750px) {
    flex-direction: column;
    align-items: center;
  padding: 0px;
  }
`;

export const SubjectContainer = styled.div`
  display: flex;
  background-color: #3498dbd6;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 30%;
  padding: 30px 5px;
  border-radius: 10px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  @media (max-width:750px) {
    max-width: 100%;
    margin: 10px;
  }
`;

export const Logo = styled.img`
  width: 20%;
  height: 20%;
  padding: 10px 0px;
  filter: brightness(15);
`;

export const SubjectInfo = styled.div`
  width: 80%;
  padding: 0px 10px;
  align-items: center;
  justify-content: center;
`;

export const SubjectName = styled.h3`
  text-align: left;
  padding: 6px 0px;
  margin: 0px;
  color: white;
`;

export const SubjectDescription = styled.p`
  text-align: left;
  margin: 0px;
  color: white;
`;
