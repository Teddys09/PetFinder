import React from 'react';
import { FooterContainer, FooterPaw } from './Footer.styles';
import Paw from '../../assets/icon/paw-solid.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterPaw src={Paw} alt="paw" />
      <p>© 2022 Pet Finder</p>
      <FooterPaw src={Paw} alt="paw" />
    </FooterContainer>
  );
};

export default Footer;
