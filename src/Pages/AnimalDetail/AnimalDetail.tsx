import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PetInfo from '../../Components/AnimalDetail/PetInfo/PetInfo';
import Lightbox from '../../Components/Lightbox/Lightbox';
import Error from '../Error/Error';
import { AnimalDetailContainer, ArrowLeft } from './AnimalDetail.styles';
import ArrowLeftImg from '../../assets/icon/arrow-left.svg';
import { useNavigate } from 'react-router-dom';

type Ianimals = {
  name: string;
  age: string;
  contact: {
    email: string;
    phone: string;
  };
  breeds: {
    primary: string;
    secondary: string;
    mixed: boolean;
    unknown: boolean;
  };
  description: string;
  photos: [{ small: string; medium: string; large: string; full: string }];
  status: string;
};

const AnimalDetail = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const idInUrl = urlSearchParams.get('_id') ?? '';
  const id = parseInt(idInUrl);
  const [animals, setAnimals] = useState<Ianimals>({} as Ianimals);
  const animalsRandom = useSelector((state: any) => state.animals[0]);
  const animalsFiltered = useSelector((state: any) => state.animalsFiltered[0]);
  const navigate = useNavigate();

  useEffect(() => {
    if (animalsRandom && animalsRandom.length > 0) {
      const animal = animalsRandom.find((animal: any) => animal.id === id);
      setAnimals(animal);
    } else if (animalsFiltered && animalsFiltered.length > 0) {
      const animal = animalsFiltered.find((animal: any) => animal.id === id);
      setAnimals(animal);
    }
  }, [animalsRandom, animalsFiltered, id]);

  if (animals && Object.keys(animals).length > 0) {
    return (
      <>
        <AnimalDetailContainer>
          <Lightbox {...animals} />
          <PetInfo {...animals} />
        </AnimalDetailContainer>
        <ArrowLeft
          src={ArrowLeftImg}
          alt="arrow-left"
          onClick={() => navigate('/Pet')}
        />
      </>
    );
  } else {
    return <Error />;
  }
};

export default AnimalDetail;
