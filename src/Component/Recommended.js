import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { app } from "../fire";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeData, selectData } from "../Rek/Data";

const Recommended = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myStore.dataBase);
  console.log(data);
  const [show, setShow] = useState([]);

  const getData = async () => {
    await app
      .firestore()
      .collection("movies")
      .onSnapshot((r) => {
        const q = [];
        r.forEach((doc) => {
          q.push({ ...doc.data(), id: doc.id });
        });
        setShow(q);
        dispatch(activeData(show));
      });
  };

  console.log(show);
  console.log("Viewing Data: ", data);

  useEffect(() => {
    app
      .firestore()
      .collection("movies")
      .onSnapshot((r) => {
        const q = [];
        r.forEach((doc) => {
          q.push({ ...doc.data(), id: doc.id });
        });
        setShow(q);
        dispatch(activeData(show));
      });
  }, []);

  return (
    <Container>
      <TextHolder> Recommended</TextHolder>
      <Wrapper>
        {data.map((item) => (
          <Holder key={item.id}>
            <Link to={`/${item.id}`}>
              <img src={item.cardImg} />
            </Link>
          </Holder>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Recommended;

const Container = styled.div`
  width: 100vw;
  padding-bottom: 20px;
`;
const TextHolder = styled.div`
  margin-left: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  width: 94%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 10px;
  margin: 0 20px;
  /* background-color: red; */
  overflow: hidden;
`;

const Holder = styled.div`
  width: 90%;
  border: 2px solid rgba(249, 249, 249, 0.4);
  border-radius: 5px;
  overflow: hidden;
  transform: scale(1);
  transition: all 350ms;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.06);
    border-color: white;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
