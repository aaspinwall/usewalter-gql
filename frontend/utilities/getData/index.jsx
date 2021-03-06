import { useEffect, useState } from 'react';
import Link from 'next/link';
import Loading from '../../components/ui/loading';
import { Delivered } from '../../components/ui/widgets';
import { Results } from '../../components/ui/results';
import { GET_ALL_PACKAGES } from '../../components/polloTest/PackageOps';
import { useLazyQuery } from '@apollo/client';

const GetAllPackages = () => {
  const [packageData, setPackageData] = useState(null);
  const [reversed, setReversed] = useState(null);
  const [roomResults, { loading, data }] = useLazyQuery(GET_ALL_PACKAGES, {
    onCompleted: ({ packages }) => {
      console.log(packages);
      setPackageData(packages);
    },
  });

  useEffect(() => {
    roomResults();
  }, []);

  useEffect(() => {
    if (packageData && packageData.length > 0) {
      setReversed([...packageData].reverse());
    }
  }, [packageData]);

  if (!reversed) {
    return <Loading />;
  }
  console.log(packageData);
  return (
    <div>
      {reversed.map((pak) => {
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

export default GetAllPackages;
