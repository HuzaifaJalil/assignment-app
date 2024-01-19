import React from "react";
import CSImage from "../../images/laptop.svg";
import mathsImage from "../../images/calculator.svg";
import accountingImage from "../../images/receipt.svg";
import engineeringImage from "../../images/gears.svg";
import historyImage from "../../images/clock.svg";
import psychologyImage from "../../images/stethoscope.svg";
import {
  Description,
  Heading,
  Logo,
  SubjectContainer,
  SubjectDescription,
  SubjectInfo,
  SubjectName,
  SubjectsOuterContainer,
  Wrapper,
} from "./SubjectComponent.Styles";

export const SubjectComponent = () => {
  return (
    <Wrapper>
      <Heading>Subjects We Offer</Heading>
      <Description>
        The Assignment Educator has a vast team of PhD experts who belong to a
        wide range of academic disciplines. Therefore, we are able to offer help
        in more than fifty disciplines. Some of the most ordered disciplines are
        given below.
      </Description>
      <SubjectsOuterContainer>
        <SubjectContainer>
          <Logo src={CSImage} alt="Computer Sciences" />
          <SubjectInfo>
            <SubjectName>Computer Science</SubjectName>
            <SubjectDescription>
              From data sciences to AI and understanding algorithms, computer
              science demands you to be extra efficient. With our experts, you
              are always on the safe side with your grades in this subject.
            </SubjectDescription>
          </SubjectInfo>
        </SubjectContainer>
        <SubjectContainer>
          <Logo src={mathsImage} alt="Mathematics" />
          <SubjectInfo>
            <SubjectName>Mathematics</SubjectName>
            <SubjectDescription>
              Whether you are stressed out by calculus or it is algebra that has
              made your life harder, we are here to protect your academic
              interests. Ask for help and our subject specialists will do the
              job for you.
            </SubjectDescription>
          </SubjectInfo>
        </SubjectContainer>
        <SubjectContainer>
          <Logo src={accountingImage} alt="Accounting" />
          <SubjectInfo>
            <SubjectName>Accounting</SubjectName>
            <SubjectDescription>
              Accounting is a difficult subject if you are unable to wrap it
              around your head. From understanding balance sheets to analyzing
              credit and debt, we can do it all for you at cheap prices.
            </SubjectDescription>
          </SubjectInfo>
        </SubjectContainer>
      </SubjectsOuterContainer>
      <SubjectsOuterContainer>
        <SubjectContainer>
          <Logo src={engineeringImage} alt="Engineering" />
          <SubjectInfo>
            <SubjectName>Engineering</SubjectName>
            <SubjectDescription>
              It is one thing to understand scientific theories and another to
              apply them. If you are busy applying it, we can do the theoretical
              part for you in order to boost your academic results.
            </SubjectDescription>
          </SubjectInfo>
        </SubjectContainer>
        <SubjectContainer>
          <Logo src={historyImage} alt="History" />
          <SubjectInfo>
            <SubjectName>History</SubjectName>
            <SubjectDescription>
              Historical facts seem cool but creating history assignments is
              boring. You do not need to do this all on your own. We have PhDs
              in the field to help you and they can cater to your requests
              immediately.
            </SubjectDescription>
          </SubjectInfo>
        </SubjectContainer>
        <SubjectContainer>
          <Logo src={psychologyImage} alt="Psychology" />
          <SubjectInfo>
            <SubjectName>Psychology</SubjectName>
            <SubjectDescription>
              From understanding feelings and thoughts to mastering human
              behavior, psychology teaches you a ton of things. However, if you
              are faced with tons of assignments, you can always ask us for
              help.
            </SubjectDescription>
          </SubjectInfo>
        </SubjectContainer>
      </SubjectsOuterContainer>
    </Wrapper>
  );
};
