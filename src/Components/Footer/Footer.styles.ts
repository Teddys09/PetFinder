import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;

  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: auto;
  height: 9vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FooterPaw = styled.img`
  width: 6vh;
  height: 6vh;
`;

export { FooterContainer, FooterPaw };
