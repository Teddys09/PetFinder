import styled from 'styled-components';

const AnimalDetailContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
`;

const ArrowLeft = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 16px;
  left: 10px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

export { AnimalDetailContainer, ArrowLeft };
