import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import Viewer3D from './Viewer3D';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.darkMode ? '#181818' : '#f0f0f0')};
  color: ${(props) => (props.darkMode ? '#fff' : '#333')};
  min-height: 100vh;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPart, setSelectedPart] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Container darkMode={darkMode}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Viewer3D setSelectedPart={setSelectedPart} />
      {selectedPart && <ProductDetails selectedPart={selectedPart} />}
    </Container>
  );
};

export default App;