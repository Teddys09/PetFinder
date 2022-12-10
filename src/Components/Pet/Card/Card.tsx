import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  CardBreed,
  CardContainer,
  CardGenderAge,
  CardImage,
  CardInfo,
  CardLocation,
  CardName,
  LoadingSpinner,
  LoadingSPinnerContainer,
} from './Card.styles';
import NoImage from '../../../assets/img/no-image.webp';

const Card = () => {
  const [animals, setAnimals] = useState<object[]>([]);
  const navigate = useNavigate();

  const storeAnimals = useSelector((state: any) => state.animals);

  useEffect(() => {
    if (storeAnimals) {
      setAnimals(storeAnimals);
    }
  }, [storeAnimals]);

  const animalImg = (animal: any) => {
    if (animal?.photos[0]?.medium !== undefined) {
      return animal?.photos[0]?.medium;
    } else {
      return NoImage;
    }
  };

  if (animals !== undefined && animals.length > 0) {
    return (
      <>
        {animals.map((animal: any) => (
          <CardContainer
            key={animal.id}
            onClick={() => navigate(`/AnimalDetail?_id=${animal.id}`)}
          >
            <CardImage src={animalImg(animal)} alt={animal.name} />
            <CardInfo>
              <CardName>{animal.name}</CardName>
              <CardBreed>{animal.breeds.primary}</CardBreed>
              <CardGenderAge>
                {animal.gender}, {animal.age}
              </CardGenderAge>
              <CardLocation>
                {animal.contact.address.city}, {animal.contact.address.state}
              </CardLocation>
            </CardInfo>
          </CardContainer>
        ))}
      </>
    );
  } else {
    return (
      <LoadingSPinnerContainer>
        <LoadingSpinner className="bounce1" />
        <LoadingSpinner className="bounce2" />
        <LoadingSpinner className="bounce3" />
      </LoadingSPinnerContainer>
    );
  }
};

export default Card;
