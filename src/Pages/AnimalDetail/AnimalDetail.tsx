import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PetInfo from '../../Components/AnimalDetail/PetInfo/PetInfo';
import Lightbox from '../../Components/Lightbox/Lightbox';
import Error from '../Error/Error';
import { AnimalDetailContainer, ArrowLeft } from './AnimalDetail.styles';
import ArrowLeftImg from '../../assets/icon/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import { Ianimals } from '../../utils/type/animal';

const AnimalDetail = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const idInUrl = urlSearchParams.get('_id') ?? '';
  const id = parseInt(idInUrl);
  const [animals, setAnimals] = useState<Ianimals>({} as Ianimals);
  const animal = useSelector((state: any) => state.animals);

  const navigate = useNavigate();

  useEffect(() => {
    if (animal && animal.length > 0) {
      const animalById = animal.find((animal: any) => animal.id === id);
      setAnimals(animalById);
    }
  }, [animal, id]);

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
