import React from 'react';
import { PetInfoContainer, PetInfoP } from './PetInfo.styles';

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

const PetInfo = (animals: Ianimals) => {
  return (
    <PetInfoContainer>
      <PetInfoP>Name: {animals.name}</PetInfoP>
      <PetInfoP>Age: {animals.age}</PetInfoP>
      <PetInfoP>
        Breed(s): {animals.breeds?.primary} {animals.breeds?.secondary}
      </PetInfoP>

      <PetInfoP>Status: {animals.status ? animals.status : 'Unknown'}</PetInfoP>
      <PetInfoP>
        Email: {animals.contact?.email ? animals.contact.email : 'Unknown'}
      </PetInfoP>
      <PetInfoP>
        Phone: {animals.contact?.phone ? animals.contact.phone : 'Unknown'}
      </PetInfoP>
      <PetInfoP>
        Description:{' '}
        {animals.description ? animals.description : 'No description'}
      </PetInfoP>
    </PetInfoContainer>
  );
};

export default PetInfo;
