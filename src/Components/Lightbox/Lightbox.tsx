import React, { useState } from 'react';
import {
  CarretFilter,
  ImageContainer,
  ImageLightbox,
  ImgCarret,
  LightboxCarretLeft,
  LightboxCarretRight,
  LightboxContainer,
} from './Lightbox.styles';

import CarretRirght from '../../assets/icon/caret-right-solid.svg';
import CarretLeft from '../../assets/icon/caret-left-solid.svg';
import NoImage from '../../assets/img/no-image.webp';

type Ianimals = {
  name: string;
  age: string;
  contact: {
    email: string;
    phone: string;
  };

  description: string;
  photos: [{ small: string; medium: string; large: string; full: string }];
  status: string;
};
const Lightbox = (animals: Ianimals) => {
  const [index, setIndex] = useState<number>(0);

  const animalImg = () => {
    if (animals?.photos?.length > 0) {
      if (window.screen.width < 768) {
        return animals?.photos[index].medium;
      }
      if (window.screen.width > 1350) {
        return animals?.photos[index].full;
      } else if (window.screen.width > 768) {
        return animals?.photos[index].large;
      }
    } else {
      return NoImage;
    }
  };

  if (!animals) {
    return <h1>Loading...</h1>;
  }

  return (
    <LightboxContainer>
      {animals?.photos?.length > 1 ? (
        <>
          <LightboxCarretLeft
            onClick={() => {
              if (index === 0) {
                setIndex(animals.photos.length - 1);
              } else {
                setIndex(index - 1);
              }
            }}
          >
            <CarretFilter>
              <ImgCarret src={CarretLeft} alt="carret-left" />
            </CarretFilter>
          </LightboxCarretLeft>
          <LightboxCarretRight
            onClick={() => {
              if (index === animals.photos.length - 1) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          >
            <CarretFilter>
              <ImgCarret src={CarretRirght} alt="carret-right" />
            </CarretFilter>
          </LightboxCarretRight>
        </>
      ) : null}
      <ImageContainer>
        <ImageLightbox src={animalImg()} alt={animals?.name} />
      </ImageContainer>
    </LightboxContainer>
  );
};

export default Lightbox;
