import styled from "styled-components";
import { Colors } from "../constants/Colors";
// import { Link } from "react-router-dom";

const Nav = styled.nav`
  // background: ${Colors.primary}; /* Darker shade for a more refined look */
  color: white;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  padding: 0.75rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
`;

const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  cursor: pointer;
`;

const SuggestedSearch = styled.div`
  background-color: #fff; // Adjust color to match theme
  padding: 8px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #e0e0e0; // Adjust for hover effect
  }
`;

const SearchBar = styled.input`
  flex: 1;
  margin: 0 20px;
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  outline: none;
  max-width: 320px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  color: white;
  margin-left: 20px;
  cursor: pointer;
  font-size: 1rem;
`;

const SuggestedContainer = styled.div`
  margin-top: 8px;
  position: absolute;
  top: 62px;
  borderWidth: 1;
  borderColor: #ddd;
  borderRadius: 12px;
}`;

export {
  Nav,
  Logo,
  SearchBar,
  NavItems,
  NavItem,
  SuggestedSearch,
  SuggestedContainer,
};
