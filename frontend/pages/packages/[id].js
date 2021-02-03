import { useEffect, useState } from "react";
import { Delivered } from "../../components/ui/widgets";
import IconCircle from "../../components/ui/icon";
import Link from "next/link";
import styled from "styled-components";
import Card from "../../components/ui/card";
import { GET_PACKAGE_BY_ID } from "../../components/polloTest/GetPackages";
import Loading from "../../components/ui/Loading";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";

import { COLORS } from "../../styles/colors";

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

      <Top>
        <IconCircle icon={"/imgs/package.png"} size='large' />
        <div>
          <div className='inline'>
            <h3>{description}</h3>
            <Delivered status={delivered} />
          </div>
          <div>For</div>
          <div>Unit</div>
        </div>
      </Top>

      <Results className='box title-light ' key={`packages-${id}`}>
        <div>{description}</div>
        <div>403</div>
        <Delivered status={delivered} />
      </Results>
    </Container>
  );
}

const Results = styled.div``;

const Top = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */
  display: flex;
  align-items: center;
  gap: 2rem;
  .inline {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  h3 {
    max-width: 50%;
  }
`;

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
