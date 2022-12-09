import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../Components/Pet/Card/Card';

import { GetFilteredAnimal, GetRandomAnimal } from '../../utils/useFetch';
import { PetContainer } from './Pet.styles';

const Pet = () => {
  const filter = useSelector((state: any) => state.filter);
  const token = useSelector((state: any) => state.token);

  if (Object.keys(filter).length === 0) {
    GetRandomAnimal('https://api.petfinder.com/v2/animals', token);
  } else {
    GetFilteredAnimal(
      `https://api.petfinder.com/v2/animals?type=${filter.type}&age=${filter.age}&gender=${filter.gender}`,
      token
    );
  }

  return (
    <PetContainer>
      <Card />
    </PetContainer>
  );
};

export default Pet;
