import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

function App() {
  return (
    <div>
      <Logo src={logo} alt="logo" />
    </div>
  );
}

export default App;
