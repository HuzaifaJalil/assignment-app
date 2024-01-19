import React from 'react'
import { IntroContainer, LeftContainer, RightContainer } from './Intro.Styles'
import { OurTitle, Form } from "../../components";

export const Intro = () => {
  return (
    <IntroContainer>
        <LeftContainer>
            <OurTitle />
        </LeftContainer>
        <RightContainer>
            <Form />
        </RightContainer>
    </IntroContainer>
  )
}
