import React, { useEffect, useState } from "react";
import IconCircle from "../../components/ui/icon";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_RESIDENT_BY_ID } from "../../components/polloTest/ResidentOps";

interface Resident {
  resident?: any;
  super?: any;
  email?: any;
}

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
    const { resident, super: admin, email } = residentObject;
    console.log(resident);
  }, [residentData]);

  return (
    <div>
      <h3>Resident profile</h3>
      <IconCircle icon={"/imgs/profile.png"} />
    </div>
  );
};

export default UserProfile;
