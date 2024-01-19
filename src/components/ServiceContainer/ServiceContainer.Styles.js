import styled from "styled-components";

export const ServiceOuterContainer = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const ServiceImage = styled.img`
  max-width: 100%;
  height: 150px;
  object-fit: conver;
  border-radius: 8px;
`;

export const ServiceTitle = styled.h2`
  color: #007bff;
  margin-top: 18px;
  font-size: 1.2em;
`;

export const ServiceDescription = styled.p`
  margin-top: 8px;
`;

export const OrderButton = styled.button`
  margin-top: 16px;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #0b2e89;
  }
`;
