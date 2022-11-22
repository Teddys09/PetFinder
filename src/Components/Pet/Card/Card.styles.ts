import styled from 'styled-components';
import { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }

 
  
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 125px;
  margin: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  border-radius: 5px;
  @media (min-width: 768px) {
    flex-direction: column;
    width: 22%;
    height: 300px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 35%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  object-fit: cover;
  @media (min-width: 768px) {
    width: 100%;
    height: 60%;
    border-radius: 5px 5px 0 0;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 65%;
  height: 100%;
  @media (min-width: 768px) {
    width: 100%;
    height: 40%;
  }
`;

const CardName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-left: 10px;
`;

const CardBreed = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding-left: 10px;
`;

const CardGenderAge = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding-left: 10px;
`;

const CardLocation = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding-left: 10px;
`;

const LoadingSPinnerContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 100%;
  .bounce1 {
    animation: ${bounce} 1s infinite;
  }
  .bounce2 {
    animation: ${bounce} 1s infinite 0.2s;
  }
  .bounce3 {
    animation: ${bounce} 1s infinite 0.4s;
  }
`;

const LoadingSpinner = styled.div`
  background-color: #577088;
  border: 3px solid #577088;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export {
  CardContainer,
  CardImage,
  CardInfo,
  CardName,
  CardBreed,
  CardGenderAge,
  CardLocation,
  LoadingSpinner,
  LoadingSPinnerContainer,
};
