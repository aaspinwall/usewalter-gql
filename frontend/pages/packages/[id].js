import { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillCheckCircle, AiFillClockCircle } from "react-icons/ai";
import styled from "styled-components";
import Card from "../../components/ui/card";
import { GET_PACKAGE_BY_ID } from "../../components/polloTest/GetPackages";
import Loading from "../../components/ui/Loading";
import { useLazyQuery } from "@apollo/client";
import { COLORS } from "../../styles/colors";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VotingRoom() {
  const { query } = useRouter();
  // timerProps are passed to the Timer component to style the countdown animation
  const [roomData, setRoomData] = useState(null);
  const [roomResults, { loading, data }] = useLazyQuery(GET_PACKAGE_BY_ID, {
    onCompleted: (data) => {
      setRoomData(data.package);
    },
  });

  useEffect(() => {
    roomResults({ variables: { id: Number(query.id) } });
  }, [query]);

  if (!roomData) {
    return <Loading />;
  }

  console.log(roomData);

  const { id, delivered, description } = roomData;

  return (
    <Container>
      <Description>Results page</Description>

      <Results className='box title-light ' key={`packages-${id}`}>
        <div>{description}</div>
        <div>403</div>
        {delivered ? (
          <AiFillCheckCircle color='green' />
        ) : (
          <AiFillClockCircle color='grey' />
        )}
      </Results>
    </Container>
  );
}

const Results = styled.div``;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  color: white;
  text-align: center;
  margin-top: 0;
  padding-top: 15px;
  font-size: 3rem;
`;

const Description = styled.p`
  color: white;
  margin-left: 1rem;
`;

const LinkHome = styled.a`
  margin-top: 15px;
  padding: 8px;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 2px;
  border: 3px solid #293241;
  cursor: pointer;

  &:active {
    background: #e5e5e5;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
    transform: scale(0.9);
  }
`;
