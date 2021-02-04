import { useEffect, useState } from "react";
import { Delivered } from "../../components/ui/widgets";
import IconCircle from "../../components/ui/icon";
import Link from "next/link";
import styled from "styled-components";
import Card from "../../components/ui/card";
import {
  GET_PACKAGE_BY_ID,
  SET_PACKAGE_TO_DELIVERED,
} from "../../components/polloTest/GetPackages";
import Loading from "../../components/ui/Loading";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function VotingRoom() {
  const { query } = useRouter();
  const [setToDelivered] = useMutation(SET_PACKAGE_TO_DELIVERED);
  // timerProps are passed to the Timer component to style the countdown animation
  const [pakData, setPakData] = useState(null);
  const [pakResults, { loading, data }] = useLazyQuery(GET_PACKAGE_BY_ID, {
    onCompleted: (data) => {
      setPakData(data.package);
    },
  });

  useEffect(() => {
    pakResults({ variables: { id: Number(query.id) } });
  }, [query]);

  if (!pakData) {
    return <Loading />;
  }

  const { id, delivered, description, unit } = pakData;

  const handleDelivered = async () => {
    try {
      const success = await setToDelivered({
        variables: {
          id: id,
        },
      });
      console.table(success.data);

      // redirect to security
    } catch (error) {
      console.log(error);
      // error
    }
  };

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
          <div>For: Unit# {unit}</div>
        </div>
      </Top>

      <Results className='box title-light ' key={`packages-${id}`}>
        <div>{description}</div>
        <div>403</div>
        <Delivered status={delivered} />
        <button onClick={handleDelivered}>Delivered</button>
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

const Description = styled.p`
  color: white;
  margin-left: 1rem;
`;
