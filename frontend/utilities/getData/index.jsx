import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Loading from '../../components/ui/Loading';
import { Delivered } from '../../components/ui/widgets';
import { Results } from '../../components/ui/results';
import { AiFillCheckCircle, AiFillClockCircle } from 'react-icons/ai';

import { GET_ALL_PACKAGES } from '../../components/polloTest/GetPackages';
import { useLazyQuery } from '@apollo/client';

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
  console.log(packageData);
  return (
    <div>
      {packageData.map((pak) => {
        const { id, description, delivered, unit } = pak;

        return (
          <Link href={`/packages/${id}`}>
            <Results className="box title-light " key={`packages-${id}`}>
              <div>{description}</div>
              <div>{unit}</div>
              <Delivered delivered={delivered} />
            </Results>
          </Link>
        );
      })}
    </div>
  );
};

export default GetData;
