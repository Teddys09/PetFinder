import styled from 'styled-components';

const PetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const PetInfoP = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding: 5px 5px;

  text-decoration: underline;
  text-decoration-color: #577088;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;

  line-height: 1.5;
`;

export { PetInfoContainer, PetInfoP };
