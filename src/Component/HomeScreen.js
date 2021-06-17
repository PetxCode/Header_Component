import React from "react";
import styled from "styled-components";
import ViewerList from "./ViewerList";
import HeaderComponent from "./HeaderComponent";
import Recommended from "./Recommended";

const GameScreen = () => {
  return (
    <Container>
      <Recommended />
    </Container>
  );
};

export default GameScreen;
// <ViewerList />
const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  // min-height: calc(height - 70px)

  &:before {
    content: "";
    background: url("/images/home-background.png") center center / cover fixed
      no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
