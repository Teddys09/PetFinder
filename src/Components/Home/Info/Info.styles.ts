import styled from 'styled-components';

import { keyframes } from 'styled-components';
const rotate = keyframes`
from {  transform: rotate(0deg); }
to { transform: rotate(180deg); }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-position: 50%;
  background-size: cover;
  height: 81.6vh;
  * {
    margin: 0;
  }
`;
const InfoAbsoluteContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  height: 65%;
  text-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 50%);
  @media (min-width: 768px) {
    width: 80%;
    left: 10%;
  }
`;

const InfoFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;
const InfoTitle = styled.h2`
  font-size: 32px;
  color: #fff;
  padding-left: 10px;
  padding-right: 20px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const InfoDescription = styled.p`
  font-size: 19px;
  font-weight: 600;
  color: #fff;
  padding-left: 10px;
  padding-right: 20px;
  margin-bottom: 10px;
`;

// second div to search for pets

const InfoSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 45%;
  position: absolute;
  top: 55%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  @media (min-width: 768px) {
    width: 80%;
    height: 30%;
    left: 10%;
    border-radius: 10px;
    top: 65%;
  }
`;

const InfoTypeOfAnimalsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 20%;
  .active {
    color: #fff;
  }
`;

const InfoAnimalType = styled.h3`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: #bbcbcb;
`;

// container age and gender

const InfoAgeGenderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30%;
  .rotate {
    animation: ${rotate} 1s;
    animation-fill-mode: forwards;
  }
`;

const InfoAgeGenderSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  width: 40%;
  height: 60px;
  border-radius: 5px;
`;

const InfoAgeGenderTitle = styled.h4`
  padding-top: 5px;
  padding-left: 15px;
  font-size: 14px;
  font-weight: 700;

  color: #bbcbcb;
`;

const InfoImageContainer = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 18px;
  right: 4px;
  cursor: pointer;
`;

const InfoCurrentChoice = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: black;
  padding-left: 15px;
  padding-top: 10px;
`;

// container dropdown

const InfoDropdownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 75px;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  padding: 0;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 50%);
`;

const InfoDropdownItem = styled.li`
  list-style: none;
  padding: 5px 0;
  padding-left: 15px;
  font-size: 15px;
  font-weight: 500;
  color: black;
  cursor: pointer;
`;

// container search button

const InfoSearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60px;
  background-color: #577088;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const InfoImgSearch = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const InfoTextSearch = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

// container for age gender and search button

const InfoAgeGenderSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 80%;
  }
`;

export {
  InfoContainer,
  InfoTitle,
  InfoAbsoluteContainer,
  InfoFilter,
  InfoDescription,
  InfoSearchContainer,
  InfoTypeOfAnimalsContainer,
  InfoAnimalType,
  InfoAgeGenderContainer,
  InfoAgeGenderSubContainer,
  InfoAgeGenderTitle,
  InfoImageContainer,
  InfoCurrentChoice,
  InfoDropdownContainer,
  InfoDropdownItem,
  InfoSearchButtonContainer,
  InfoImgSearch,
  InfoTextSearch,
  InfoAgeGenderSearchContainer,
};
