import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DetailsContainer = styled(motion.div)`
  padding: 20px;
  background: #fff;
  color: #333;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 300px;
  margin: 20px;
`;

const ProductDetails = ({ selectedPart }) => {
  return (
    <DetailsContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2>{selectedPart.name}</h2>
      <p>{selectedPart.description}</p>
    </DetailsContainer>
  );
};

export default ProductDetails;