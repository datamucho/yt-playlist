import styled from "styled-components";
import { motion } from "framer-motion";

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 480px;
  height: 100vh;
  background: #f8f9fa; /* Light grey background */
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow-y: auto; /* Enables scrolling if content overflows */
`;

const HamburgerButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 110;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;

  div {
    width: 30px;
    height: 3px;
    background: #343a40; /* Dark grey for contrast */
    border-radius: 10px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
  }
`;

const Content = styled.div`
  padding: 40px;
`;

const Title = styled.h2`
  color: #495057; /* Dark grey */
  font-size: 24px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #007bff; /* Bootstrap blue */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  transition: background-color 250ms;

  &:hover {
    background-color: #0056b3; /* Darker blue */
  }
`;

const PlaylistList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PlaylistItem = styled.li`
  background-color: #ffffff; /* White */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  font-size: 16px;
  color: #007bff; /* Bootstrap blue for action buttons */

  &:hover {
    color: #0056b3; /* Darker blue */
  }
`;

export {
  SidebarContainer,
  HamburgerButton,
  Content,
  Title,
  Button,
  PlaylistList,
  PlaylistItem,
  ActionButton,
};
