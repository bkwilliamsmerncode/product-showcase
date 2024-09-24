import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${(props) => (props.darkMode ? '#333' : '#fff')};
  color: ${(props) => (props.darkMode ? '#fff' : '#333')};
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const DarkModeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <Nav darkMode={darkMode}>
      <Logo>3D Product Showcase</Logo>
      <DarkModeToggle onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </DarkModeToggle>
    </Nav>
  );
};

export default Navbar;