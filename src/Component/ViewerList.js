import React from "react";
import styled from "styled-components";

const ViewerList = () => {
  return (
    <Wrap>
      <Container>
        <Wrapper>
          <img src="/images/viewers-disney.png" />
          <video
            loop={true}
            autoPlay={true}
            playsInline={true}
            type="video/mp4"
            src="videos/Course.mp4"
            muted
          />
        </Wrapper>
        <Wrapper>
          <img src="/images/viewers-pixar.png" />
          <video
            loop={true}
            autoPlay={true}
            playsInline={true}
            type="video/mp4"
            src="videos/Vision.mp4"
            muted
          />
        </Wrapper>
        <Wrapper>
          <img src="/images/viewers-marvel.png" />
          <video
            loop={true}
            autoPlay={true}
            playsInline={true}
            type="video/mp4"
            src="videos/1564676115-marvel.mp4"
            muted
          />
        </Wrapper>
        <Wrapper>
          <img src="/images/viewers-national.png" />
          <video
            loop={true}
            autoPlay={true}
            playsInline={true}
            type="video/mp4"
            src="videos/1564676296-national-geographic.mp4"
            muted
          />
        </Wrapper>
      </Container>
    </Wrap>
  );
};

export default ViewerList;

const Wrap = styled.div`
  width: 100%;
  /* height: 100vh; */
  margin: auto;
`;

const Container = styled.div`
  width: 96.8%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;
const Wrapper = styled.div`
  padding: 20px;
  border: 3px solid rgba(249, 249, 249, 0.2);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  transform: scale(1);
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* z-index: 10; */
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }

  &:hover {
    border-color: white;
    transform: scale(1.06);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    video {
      opacity: 1;
    }

    img {
      opacity: 0.8;
    }
  }
`;
