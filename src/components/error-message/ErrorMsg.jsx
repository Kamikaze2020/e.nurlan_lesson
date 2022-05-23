import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrorMsg = () => {
  return <StyledTitle>Error 404</StyledTitle>
}


export default ErrorMsg;