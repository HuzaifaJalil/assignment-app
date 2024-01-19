import React from "react";
import { ClientSliderContainer } from "./ClientSlider.Styles";
import { SliderComponent } from "../../components";

export const ClientSlider = () => {
  const clients = [
    {
      heading: "Client Review 1",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "John Doe",
    },
    {
      heading: "Client Review 2",
      review:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Smith",
    },
    // Add more client data as needed
  ];
  return (
    <ClientSliderContainer>
      <SliderComponent clients={clients} />
    </ClientSliderContainer>
  );
};
