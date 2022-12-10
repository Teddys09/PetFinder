import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Carret from '../../../assets/icon/caret-down-solid.svg';
import Glass from '../../../assets/icon/magnifying-glass-solid.svg';
import Dog from '../../../assets/img/dog-home.jpg';
import DogBig from '../../../assets/img/dog-home-big.jpg';
import Cat from '../../../assets/img/cat-home.jpg';
import CatBig from '../../../assets/img/cat-home-big.jpg';
import { age } from '../../../utils/dataAnimals/age';
import { gender } from '../../../utils/dataAnimals/gender';
import {
  InfoAbsoluteContainer,
  InfoAgeGenderContainer,
  InfoAgeGenderSearchContainer,
  InfoAgeGenderSubContainer,
  InfoAgeGenderTitle,
  InfoAnimalType,
  InfoContainer,
  InfoCurrentChoice,
  InfoDescription,
  InfoDropdownContainer,
  InfoDropdownItem,
  InfoFilter,
  InfoImageContainer,
  InfoImgSearch,
  InfoSearchButtonContainer,
  InfoSearchContainer,
  InfoTextSearch,
  InfoTitle,
  InfoTypeOfAnimalsContainer,
} from './Info.styles';
import { addFilter } from '../../../utils/store';
import { useNavigate } from 'react-router-dom';

const Info = () => {
  const [dogs, setDogs] = useState<boolean>(true);
  const [ageChoice, setAgeChoice] = useState<string>('Any');
  const [genderChoice, setGenderChoice] = useState<string>('Any');
  const [ageOpen, setAgeOpen] = useState<boolean>(false);
  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>(Dog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 768) {
      if (dogs) {
        setImageUrl(Dog);
      } else {
        setImageUrl(Cat);
      }
    } else if (window.innerWidth >= 768) {
      if (dogs) {
        setImageUrl(DogBig);
      } else {
        setImageUrl(CatBig);
      }
    }
  }, [dogs]);

  const backgroundImage = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <InfoContainer style={backgroundImage}>
      <InfoFilter>
        <InfoAbsoluteContainer>
          <InfoTitle>Adopt the perfect pet</InfoTitle>
          <InfoDescription>
            Search adoptable pets from shelters, rescues & private owners.
          </InfoDescription>
        </InfoAbsoluteContainer>
      </InfoFilter>
      <InfoSearchContainer>
        <InfoTypeOfAnimalsContainer>
          <InfoAnimalType
            onClick={() => {
              setDogs(true);
            }}
            className={dogs ? 'active' : ''}
          >
            Dogs
          </InfoAnimalType>
          <InfoAnimalType
            onClick={() => {
              setDogs(false);
            }}
            className={!dogs ? 'active' : ''}
          >
            Cats
          </InfoAnimalType>
        </InfoTypeOfAnimalsContainer>
        <InfoAgeGenderSearchContainer>
          <InfoAgeGenderContainer>
            <InfoAgeGenderSubContainer>
              <InfoAgeGenderTitle>Age</InfoAgeGenderTitle>
              <InfoImageContainer
                src={Carret}
                alt="carret"
                onClick={() => setAgeOpen(!ageOpen)}
                className={ageOpen ? 'rotate' : ''}
              />
              <InfoCurrentChoice>{ageChoice}</InfoCurrentChoice>
              {ageOpen ? (
                <InfoDropdownContainer>
                  {age.map((item) => (
                    <InfoDropdownItem
                      key={item}
                      onClick={() => {
                        setAgeChoice(item);
                        setAgeOpen(!ageOpen);
                      }}
                    >
                      {item}
                    </InfoDropdownItem>
                  ))}
                </InfoDropdownContainer>
              ) : null}
            </InfoAgeGenderSubContainer>
            <InfoAgeGenderSubContainer>
              <InfoAgeGenderTitle>Gender</InfoAgeGenderTitle>
              <InfoImageContainer
                src={Carret}
                alt="carret"
                onClick={() => setGenderOpen(!genderOpen)}
                className={genderOpen ? 'rotate' : ''}
              />
              <InfoCurrentChoice>{genderChoice}</InfoCurrentChoice>
              {genderOpen ? (
                <InfoDropdownContainer>
                  {gender.map((item) => (
                    <InfoDropdownItem
                      key={item}
                      onClick={() => {
                        setGenderChoice(item);
                        setGenderOpen(!genderOpen);
                      }}
                    >
                      {item}
                    </InfoDropdownItem>
                  ))}
                </InfoDropdownContainer>
              ) : null}
            </InfoAgeGenderSubContainer>
          </InfoAgeGenderContainer>
          <InfoSearchButtonContainer
            onClick={() => {
              dispatch(
                addFilter({
                  type: dogs ? 'Dog' : 'Cat',
                  age: ageChoice === 'Unknown' ? 'Any' : ageChoice,
                  gender: genderChoice === 'Unknown' ? 'Any' : genderChoice,
                })
              );
              navigate('/Pet');
            }}
          >
            <InfoImgSearch src={Glass} alt="glass" />
            <InfoTextSearch>Search</InfoTextSearch>
          </InfoSearchButtonContainer>
        </InfoAgeGenderSearchContainer>
      </InfoSearchContainer>
    </InfoContainer>
  );
};

export default Info;
