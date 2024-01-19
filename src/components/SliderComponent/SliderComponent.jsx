import React from "react";
import Slider from "react-slick";

import {
  ClientName,
  ClientReview,
  Heading,
  Slide,
  SliderContainer,
} from "./SliderComponent.Styles";

export const SliderComponent = ({ clients }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer>
      <Slider {...sliderSettings}>
        {clients?.map((client, index) => (
          <Slide key={index}>
            <Heading>{client?.heading}</Heading>
            <ClientReview>{client?.review}</ClientReview>
            <ClientName>{client?.name}</ClientName>
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};
