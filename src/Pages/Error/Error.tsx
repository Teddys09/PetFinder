import React from 'react';
import { ErrorContainer, ErrorH1, ErrorLink } from './Error.styles';

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorH1>Error 404 Pet not Found</ErrorH1>
      <ErrorLink to={'/Home'}>Home Page</ErrorLink>
    </ErrorContainer>
  );
};

export default Error;
