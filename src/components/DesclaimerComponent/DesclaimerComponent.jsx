import React from "react";
import mylogo from "../../images/logo.png";
import {
  ContactItem,
  ContactsContainer,
  ContactsOuterContainer,
  ContactsTitle,
  Description,
  DisclaimerContainer,
  DisclaimerOuterContainer,
  Logo,
  ServiceItem,
  ServiceTitle,
  ServicesContainer,
  ServicesOuterContainer,
  Title,
} from "./DesclaimerComponent.Styles";

export const DesclaimerComponent = () => {
  return (
    <DisclaimerContainer>
      <DisclaimerOuterContainer>
        <Title>Disclaimer:</Title>
        <Description>
          The Assignment Educator is an academic help website that serves online
          clientele within all the local and international laws. We hold no
          responsibility for any losses incurred on the client while using this
          website.
        </Description>
        <Logo src={mylogo} alt="Company Logo" />
      </DisclaimerOuterContainer> 

      <ServicesOuterContainer>
        <ServicesContainer>
          <ServiceTitle>Services</ServiceTitle>
          <ServiceItem>Service 1</ServiceItem>
          <ServiceItem>Service 2</ServiceItem>
          <ServiceItem>Service 3</ServiceItem>
          <ServiceItem>Service 1</ServiceItem>
          <ServiceItem>Service 2</ServiceItem>
          <ServiceItem>Service 3</ServiceItem>
        </ServicesContainer>
      </ServicesOuterContainer>

      <ContactsOuterContainer>
        <ContactsContainer>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H0zm1 1v2.764l5.619 3.445a1 1 0 0 0 .763 0L16 6.765V4H1zm0 9h14l-7-4.268L1 13z" />
            </svg>
            example@email.com
          </ContactItem>
          <ContactItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM3 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H3z" />
              <path d="M11 1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2V1zm-1 1v10H4V2h6z" />
            </svg>
            +1 (123) 456-7890
          </ContactItem>
        </ContactsContainer>
      </ContactsOuterContainer>
    </DisclaimerContainer>
  );
};
