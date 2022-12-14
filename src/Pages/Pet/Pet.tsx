import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../Components/Pet/Card/Card';
import { addPage, addReachBottom } from '../../utils/store';
import { GetAnimals } from '../../utils/useFetch';
import { PetContainer } from './Pet.styles';

const Pet = () => {
  const dispatch = useDispatch();
  const reachBottom = useSelector((state: any) => state.reachBottom);
  GetAnimals();

  window.onscroll = () => {
    if (!reachBottom) {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.scrollHeight * 0.2;
      if (window.innerHeight + window.scrollY >= scrollHeight) {
        dispatch(addReachBottom(true));
        dispatch(addPage(1));
      }
    }
  };

  return (
    <PetContainer>
      <Card />
    </PetContainer>
  );
};

export default Pet;
