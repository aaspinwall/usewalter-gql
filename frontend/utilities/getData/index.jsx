import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Card from "../../components/ui/card";
import { GET_ALL_PACKAGES } from "../../components/polloTest/GetPackages";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";

const GetData = () => {
  const { query } = useRouter();
  // timerProps are passed to the Timer component to style the countdown animation
  const [packageData, setPackageData] = useState(null);
  const [roomResults, { loading, data }] = useLazyQuery(GET_ALL_PACKAGES, {
    onCompleted: ({ packages }) => {
      console.log(packages);
      setPackageData(packages);
    },
  });

  useEffect(() => {
    roomResults();
  }, []);

  if (!packageData) {
    return (
      <div>
        <div>wait while we fetch your results...</div>
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  return (
    <Container>
      {packageData.map((pak) => {
        const { id, description, delivered } = pak;
        return (
          <Results className='box title-light ' key={`packages-${id}`}>
            <div>{description}</div>
            <div>403</div>
            <div>{delivered ? "delivered" : "pending"}</div>
          </Results>
        );
      })}
    </Container>
  );
};

const Results = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr 1fr;

  > * {
    width: 100%;
    align-self: center;
  }
`;

const Container = styled.div`
  /*   height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column; */
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

export default GetData;
