import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { app } from "../fire";

const DetailPages = () => {
  const { id } = useParams();
  const [data1, setData1] = useState([]);

  const getData = async () => {
    await app
      .firestore()
      .collection("movies")
      .doc(id)
      .get()
      .then((user) => {
        setData1(user.data());
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Background src={data1 && data1.backgroundImg} />
      <Wrapper>
        <ImageTitle src={data1 && data1.titleImg} />
        <span>{data1 && data1.subTitle}</span>
        <p>{data1 && data1.description}</p>
      </Wrapper>
    </Container>
  );
};

export default DetailPages;

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  right: 0;
  bottom: 0;

  span {
    color: rgba(249, 249, 249, 0.6);
    font-weight: bold;
    top: 250px;
    position: absolute;
    font-size: 12px;
    text-transform: uppercase;
  }

  p {
    color: rgba(249, 249, 249, 0.9);
    font-weight: bold;
    top: 290px;
    position: absolute;
    font-size: 15px;
    width: 500px;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const ImageTitle = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  position: absolute;
`;
const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  position: relative;
  z-index: -10;
`;
