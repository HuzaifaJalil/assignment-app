import styled from "styled-components";

export const AchievementWrapper = styled.div`
  font-family: Arial, Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: #007bff;
  color: white;
  height: 200px;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 100%;
  }
`;
