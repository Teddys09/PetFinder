import React, { useState } from 'react';
import Cat from '../../assets/img/cats-header.png';
import NavIcon from '../../assets/icon/bars-solid.svg';
import {
  HeaderContainer,
  TitleHeader,
  LinkContainer,
  LinkHeader,
  ImageHeader,
  NavIconContainer,
  Menu,
  NavIconImage,
} from './Header.styles';
import { useNavigate } from 'react-router-dom';
import { GetToken } from '../../utils/useFetch';
import { useSelector } from 'react-redux';

const Header = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.token);
  if (token === '') {
    GetToken();
  }

  return (
    <HeaderContainer>
      <ImageHeader src={Cat} alt="cat" onClick={() => navigate('/')} />
      <TitleHeader>Find your pet</TitleHeader>

      <LinkContainer>
        <LinkHeader to="/Home">Home</LinkHeader>
        <LinkHeader to="/Pet">Pet</LinkHeader>
      </LinkContainer>
      <NavIconContainer
        onClick={() => handleClick()}
        className={clicked ? 'rotate' : ''}
      >
        <NavIconImage src={NavIcon} alt="nav-icon" />
      </NavIconContainer>
      <Menu className={clicked ? 'flex' : ''}>
        <LinkHeader
          to="/Home"
          onClick={() => handleClick()}
          className={clicked ? 'block' : ''}
        >
          Home
        </LinkHeader>
        <LinkHeader
          to="/Pet"
          onClick={() => handleClick()}
          className={clicked ? 'block' : ''}
        >
          Pet
        </LinkHeader>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
