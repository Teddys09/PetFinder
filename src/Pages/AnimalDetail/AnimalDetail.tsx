import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PetInfo from '../../Components/AnimalDetail/PetInfo/PetInfo';
import Lightbox from '../../Components/Lightbox/Lightbox';
import Error from '../Error/Error';
import { AnimalDetailContainer } from './AnimalDetail.styles';

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
  //use url search param to get animal id from url
  const urlSearchParams = new URLSearchParams(window.location.search);
  const idInUrl = urlSearchParams.get('_id') ?? '';

  // convert id to number
  const id = parseInt(idInUrl);

  const [animals, setAnimals] = useState<Ianimals>({} as Ianimals);
  const animalsRandom = useSelector((state: any) => state.animals[0]);
  const animalsFiltered = useSelector((state: any) => state.animalsFiltered[0]);
  console.log(id);

  useEffect(() => {
    if (animalsRandom && animalsRandom.length > 0) {
      // return the item that matches the id
      const animal = animalsRandom.find((animal: any) => animal.id === id);

      setAnimals(animal);
    } else if (animalsFiltered && animalsFiltered.length > 0) {
      // return the item that matches the id
      const animal = animalsFiltered.find((animal: any) => animal.id === id);
      setAnimals(animal);
    }
  }, [animalsRandom, animalsFiltered, id]);

  console.log(animals);

  // if animals is not empty, render the component
  if (animals && Object.keys(animals).length > 0) {
    return (
      <AnimalDetailContainer>
        <Lightbox {...animals} />
        <PetInfo {...animals} />
      </AnimalDetailContainer>
    );
  } else {
    return <Error />;
  }
};

export default AnimalDetail;
