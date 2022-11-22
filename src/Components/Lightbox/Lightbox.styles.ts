import styled from 'styled-components';

const LightboxContainer = styled.div`
  width: 80%;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  position: relative;
  @media (min-width: 768px) {
    width: 60%;
    height: 75vh;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 94%;
  }
`;

const ImageLightbox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (min-width: 768px) {
  }
`;

const LightboxDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 18px;
    font-weight: 500;
    padding: 10px 0;
  }
`;

const LightboxCarretRight = styled.div`
  position: absolute;
  top: 40%;
  right: 0;
`;
const LightboxCarretLeft = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
`;

const ImgCarret = styled.img`
  width: 40px;
  height: 40px;
`;

export {
  LightboxContainer,
  ImageLightbox,
  LightboxDescription,
  ImageContainer,
  LightboxCarretRight,
  LightboxCarretLeft,
  ImgCarret,
};
