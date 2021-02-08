import { useEffect, useState } from 'react';
import { Delivered } from '../../components/ui/widgets';
import IconCircle from '../../components/ui/icon';

import styled from 'styled-components';
import { Results } from '../../components/ui/results';
import { GET_PACKAGE_BY_ID, SET_PACKAGE_TO_DELIVERED } from '../../components/polloTest/PackageOps';
import Loading from '../../components/ui/loading';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Modal from '../../components/ui/modal';

export default function VotingRoom() {
  const { query } = useRouter();
  const router = useRouter();
  const [setToDelivered] = useMutation(SET_PACKAGE_TO_DELIVERED);
  const [pakData, setPakData] = useState(null);
  const [showModal, setModal] = useState(false);
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
      // redirect to security screen
      setModal(true);
    } catch (error) {
      console.log(error);
      // error
    }
  };

  return (
    <Container>
      <Description>Results page</Description>

      <Modal open={showModal} className="fill">
        <h2>Thanks!</h2>
        <p>Keep doing a great job!</p>
        <button
          onClick={() => {
            setModal(!showModal);
            router.push('/security');
          }}
        >
          Close
        </button>
      </Modal>

      <Top>
        <IconCircle icon={'/imgs/package.png'} size="large" />
        <div>
          <div className="">
            <h3>{description}</h3>
          </div>
          <div>For: Unit# {unit}</div>
        </div>
      </Top>

      <div>
        <Results className="box title-light " key={`packages-${id}`}>
          <div>{description}</div>
          <div>{unit}</div>
          <Delivered delivered={delivered} />
        </Results>
        <button onClick={handleDelivered}>Mark as delivered</button>
      </div>
    </Container>
  );
}

//const Results = styled.div``;

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
