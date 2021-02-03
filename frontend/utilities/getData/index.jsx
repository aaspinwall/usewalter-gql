import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Loading from "../../components/ui/Loading";
import { AiFillCheckCircle, AiFillClockCircle } from "react-icons/ai";

import { GET_ALL_PACKAGES } from "../../components/polloTest/GetPackages";
import { useLazyQuery } from "@apollo/client";

const GetData = () => {
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
    return <Loading />;
  }

  return (
    <div>
      {packageData.map((pak) => {
        const { id, description, delivered } = pak;
        return (
          <Link href={`/packages/${id}`}>
            <Results className='box title-light ' key={`packages-${id}`}>
              <div>{description}</div>
              <div>403</div>
              {delivered ? (
                <AiFillCheckCircle color='green' />
              ) : (
                <AiFillClockCircle color='grey' />
              )}
            </Results>
          </Link>
        );
      })}
    </div>
  );
};

const Results = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr 60px;
  @media only screen and (min-width: 62em) {
    grid-template-columns: 50% 1fr 60px;
  }
  > * {
    width: 100%;
    align-self: center;
  }
`;

export default GetData;
