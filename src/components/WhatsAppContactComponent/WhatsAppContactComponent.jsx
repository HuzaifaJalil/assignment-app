import React from 'react'
import whatsAppLogo from '../../images/whatsapp-logo.png';
import { WhatsAppLink, WhatsAppLogo, WhatsAppLogoContainer } from './WhatsAppContactComponent.Styles';

export const WhatsAppContactComponent = () => {
  return (
    <WhatsAppLogoContainer>
        <WhatsAppLink to='https://wa.me/923377628162'>
            <WhatsAppLogo src={whatsAppLogo} /> 
        </WhatsAppLink>
    </WhatsAppLogoContainer>
  )
}
