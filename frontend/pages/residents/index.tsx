import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { VALIDATE_USER_CREDENTIALS } from "../../components/polloTest/UserOps";
import UserLoginForm from "../../components/forms/user";

const handleSuper = (redirect) => {
  alert(
    "You're trying to log in with admin credentials. You'll be redirected to the security page"
  );
  redirect();
};

const UserLogin = () => {
  const router = useRouter();
  const [uid, setUid] = useState(null);
  const [validateCreds, { loading, data }] = useLazyQuery(
    VALIDATE_USER_CREDENTIALS,
    {
      onCompleted: (data) => {
        if (!data.validateUserCredentials) {
          console.log("nope");
        } else {
          const {
            validateUserCredentials: { id, superuser },
          } = data;
          if (superuser) {
            handleSuper(() => router.push("/security"));
            return;
          }
          setUid(id);
        }
      },
    }
  );

  const handleSubmit = async (formValues) => {
    const { email, password } = formValues;
    validateCreds({ variables: { email, password } });
  };

  useEffect(() => {
    if (uid) {
      console.log(uid);
      router.push(`/residents/${uid}`);
    }
  }, [uid]);

  return (
    <div>
      <h3>User Login</h3>
      <UserLoginForm
        callback={handleSubmit}
        invalidMessage={
          !uid
            ? "Sorry, those are not valid resident credentials. Try again"
            : null
        }
      />

      <div>
        Not a resident? try our{" "}
        <Link href='/residents/5'>
          <a>test user</a>
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
