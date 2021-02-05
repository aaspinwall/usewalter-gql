import React, { useEffect, useState } from 'react';
import IconCircle from '../../components/ui/icon';
import { useLazyQuery } from '@apollo/client';
import { AiTwotonePhone } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { GET_RESIDENT_BY_ID } from '../../components/polloTest/ResidentOps';
import { Delivered } from '../../components/ui/widgets';
import { Results } from '../../components/ui/results';

/*  prettier-ignore */
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
                <h4>{name}</h4>
                <div>unit #{unit}</div>
                <div>
                    {' '}
                    <AiTwotonePhone /> {telephone}
                </div>
                <div>{timeForNotif}</div>
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
            <IconCircle icon={'/imgs/profile.png'} />
            {residentData?.resident ? <Profile residentData={residentData} /> : null}
        </div>
    );
};

export default UserProfile;
