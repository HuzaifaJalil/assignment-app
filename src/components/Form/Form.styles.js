import styled, { keyframes } from "styled-components";

// Styled Components
export const FormContainer = styled.div`
  width: 50%;
  padding: 20px;
  border: 5px solid #007bff;
  background: #cad3dd;
  border-radius: 40px 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);

  @media (max-width: 1000px) {
    width: 70%;
  }

@media (max-width: 850px) {
  width: 80%;
}
  

@media (max-width: 750px) {
  width: 50%;
}
`;

export const Title = styled.h2`
  text-align: center;
  color: #007bff;
`;

export const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #e74c3c;
  font-size: larger;
  font-weight: bold;
  animation: ${blink} 1.5s infinite;
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #3498db;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  color: #1946b9;

  &::placeholder {
    font-size: 14px;
    color: #1946b9;
  }

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.7s;

  &:hover {
    background-color: #145dab;
  }
`;

export const ErrorText = styled.p`
  color: #e74c3c;
  margin: 5px 2px 10px;
`;
