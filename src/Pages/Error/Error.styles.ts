import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

const ErrorH1 = styled.h2`
  font-size: 30px;
  font-weight: 500;
  padding: 5px 5px;
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
  line-height: 1.5;
`;

const ErrorLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

export { ErrorContainer, ErrorH1, ErrorLink };
