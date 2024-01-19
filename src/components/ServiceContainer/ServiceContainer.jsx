import React from 'react'
import { OrderButton, ServiceDescription, ServiceImage, ServiceOuterContainer, ServiceTitle } from './ServiceContainer.Styles'

export const ServiceContainer = ({ imgUrl, title, desc }) => {
  return (
    <ServiceOuterContainer>
      <ServiceImage src={imgUrl} alt={title} /> 
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{desc}</ServiceDescription>
      <OrderButton>Order Now</OrderButton>
    </ServiceOuterContainer>
  )
}
