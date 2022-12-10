import React from 'react';
import Card from '../../Components/Pet/Card/Card';

import { GetAnimals } from '../../utils/useFetch';
import { PetContainer } from './Pet.styles';

const Pet = () => {
  GetAnimals();

  return (
    <PetContainer>
      <Card />
    </PetContainer>
  );
};

export default Pet;
