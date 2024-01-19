import React from "react";
import plagrismFreeImg from "../../images/laptop.svg";
import deadlineImg from "../../images/projects-img.svg";
import ExpertsImg from "../../images/bulb.svg";
import hustleFreeImg from "../../images/file.svg";
import customerServicesImg from "../../images/boxes.svg";
import revisionsImg from "../../images/revisions.svg";

import {
  Description,
  Feature,
  FeatureDescription,
  FeatureLogo,
  FeatureLogoContainer,
  FlexContainer,
  InnerRightDivision,
  LeftDivision,
  RightDivision,
  TopFeaturesContainer,
  TopHeading,
} from "./TopFeatures.Styles";
import { Form } from "..";

export const TopFeatures = () => {
  return (
    <TopFeaturesContainer>
      <TopHeading>Finest Service Top Features</TopHeading>
      <Description>
        When we have promised to serve, we do it with absolute commitment. Join
        us now and enjoy the finest service with our top add-on features.
      </Description>
      <FlexContainer>
        <LeftDivision>
          <Form />
        </LeftDivision>
        <RightDivision>
          <InnerRightDivision>
            <Feature>
              <FeatureLogoContainer>
                <FeatureLogo src={plagrismFreeImg} alt="100% Plagiarism-free" />
              </FeatureLogoContainer>
              <FeatureDescription>100% Plagiarism-free</FeatureDescription>
            </Feature>
            <Feature>
              <FeatureLogoContainer>
                <FeatureLogo src={deadlineImg} alt="100% Plagiarism-free" />
              </FeatureLogoContainer>
              <FeatureDescription>Deadline Oriented</FeatureDescription>
            </Feature>
            <Feature>
              <FeatureLogoContainer>
                <FeatureLogo src={ExpertsImg} alt="100% Plagiarism-free" />
              </FeatureLogoContainer>
              <FeatureDescription>Native PhD Experts</FeatureDescription>
            </Feature>
          </InnerRightDivision>
          <InnerRightDivision>
            <Feature>
              <FeatureLogoContainer>
                <FeatureLogo src={hustleFreeImg} alt="100% Plagiarism-free" />
              </FeatureLogoContainer>
              <FeatureDescription>Hassle-free Process</FeatureDescription>
            </Feature>
            <Feature>
              <FeatureLogoContainer>
                <FeatureLogo src={customerServicesImg} alt="100% Plagiarism-free" />
              </FeatureLogoContainer>
              <FeatureDescription>24/7 Customer Service</FeatureDescription>
            </Feature>
            <Feature>
              <FeatureLogoContainer>
                <FeatureLogo src={revisionsImg} alt="100% Plagiarism-free" />
              </FeatureLogoContainer>
              <FeatureDescription>Free Unlimited Revisions</FeatureDescription>
            </Feature>
          </InnerRightDivision>
        </RightDivision>
      </FlexContainer>
    </TopFeaturesContainer>
  );
};
