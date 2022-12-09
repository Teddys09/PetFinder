import styled from 'styled-components';

const LightboxContainer = styled.div`
  width: 90%;
  margin-top: 20px;

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
  overflow: hidden;
  @media (min-width: 768px) {
    height: 100%;
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
  right: 10px;
`;
const LightboxCarretLeft = styled.div`
  position: absolute;
  top: 40%;
  left: 10px;
`;

const CarretFilter = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
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
  CarretFilter,
};
