import React from "react";
import { Intro, Achievement, ClientSlider } from "../../constants";
import {
  SubjectComponent,
  Services,
  TopFeatures,
  DesclaimerComponent,
  Footer,
  WhatsAppContactComponent,
} from "../../components";

export const Home = () => {
  return (
    <>
      <Intro />
      <Services />
      <Achievement />
      <TopFeatures />
      <SubjectComponent />
      {/* <ClientSlider /> */}
      <DesclaimerComponent />
      <Footer />
      <WhatsAppContactComponent />
    </>
  );
};
