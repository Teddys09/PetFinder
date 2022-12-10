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
  const [animalById, setAnimalById] = useState<Ianimals>({} as Ianimals);
  const animals = useSelector((state: any) => state.animals);
  const navigate = useNavigate();
  useEffect(() => {
    if (animals.length > 0) {
      const animalById = animals.find((animal: any) => animal.id === id);
      setAnimalById(animalById);
    }
  }, [animals, id]);

  if (animalById && Object.keys(animalById).length > 0) {
    return (
      <>
        <AnimalDetailContainer>
          <Lightbox {...animalById} />
          <PetInfo {...animalById} />
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
