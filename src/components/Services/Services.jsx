import React from "react";
import essayServiceImage from "../../images/essay.jpg";
import assignmentServiceImage from "../../images/assignment.jpg";
import researchServiceImage from "../../images/research.jpg";
import {
  OurServices,
  ServiceContainerBox,
  ServiceDescription,
  ServiceHeading,
} from "./Services.Styles";
import { ServiceContainer } from "../../components";

export const Services = () => {
  const servicesData = [
    {
      imgUrl: essayServiceImage,
      title: "Essay",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus, asperiores omnis a repellendus laborum quaerat molestiae beatae. Consequatur, ab.",
    },
    {
      imgUrl: assignmentServiceImage,
      title: "Assignment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus, asperiores omnis a repellendus laborum quaerat molestiae beatae. Consequatur, ab.",
    },
    {
      imgUrl: researchServiceImage,
      title: "Reseach",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus, asperiores omnis a repellendus laborum quaerat molestiae beatae. Consequatur, ab.",
    },
  ];

  return ( 
    <ServiceContainerBox>
      <ServiceHeading>Our Premium Services</ServiceHeading>
      <ServiceDescription>
        We offer a wide array of services for our students. Some of the most
        popular ones are here for you:
      </ServiceDescription>
      <OurServices>
        {servicesData?.map((service, index) => (
          <ServiceContainer key={index} /*imgUrl={service?.imgUrl}*/ {...service} />
        ))}
      </OurServices>
    </ServiceContainerBox> 
  );
};
