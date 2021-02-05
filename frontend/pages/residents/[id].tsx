import React, { useEffect, useState } from 'react';
import IconCircle from '../../components/ui/icon';
import { useLazyQuery } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GET_RESIDENT_BY_ID } from '../../components/polloTest/ResidentOps';
import { Delivered } from '../../components/ui/widgets';
import { Results } from '../../components/ui/results';

interface Resident {
  resident?: any;
  superuser?: any;
  email?: any;
}

const Profile = ({ residentData }) => {
  const {
    resident: { name, telephone, timeForNotif, unit, package: packages },
    superuser,
    email,
  } = residentData;
  if (residentData.superuser) {
    return <div>This is not a user</div>;
  } else {
    return (
      <div>
        <div className="floaty spaced" style={{ padding: '2rem' }}>
          <IconCircle icon={'/imgs/profile.png'} />
          <h3>{name}</h3>
          <div>unit #{unit}</div>
        </div>

        <label>Telephone</label>
        <div className="floaty"> {telephone}</div>
        <label>Notification time</label>
        <div className="floaty">{timeForNotif}</div>

        <h3>Packages</h3>
        <div>
          {packages.map((pak) => {
            const { id, delivered, description } = pak;
            return (
              <>
                <Results className="box title-light " key={`packages-${id}`}>
                  <div>{description}</div>
                  <div>{unit}</div>
                  <Delivered delivered={delivered} />
                </Results>
              </>
            );
          })}
        </div>
        <Link href="/">
          <button>
            <a>Log out</a>
          </button>
        </Link>
      </div>
    );
  }
};

const UserProfile = () => {
  const { query } = useRouter();
  const [residentData, setResidentData] = useState({});
  const [pakResults, { loading, data }] = useLazyQuery(GET_RESIDENT_BY_ID, {
    onCompleted: ({ getResidentByUserID }) => {
      setResidentData(getResidentByUserID);
    },
  });

  useEffect(() => {
    pakResults({ variables: { id: Number(query.id) } });
  }, [query]);

  useEffect(() => {
    const residentObject: Resident = residentData;
    const { resident, superuser, email } = residentObject;
    console.log(resident);
  }, [residentData]);

  return (
    <div>
      <h3>Resident profile</h3>

      {residentData?.resident ? <Profile residentData={residentData} /> : null}
    </div>
  );
};

export default UserProfile;
