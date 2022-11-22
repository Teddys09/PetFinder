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

export { AnimalDetailContainer };
