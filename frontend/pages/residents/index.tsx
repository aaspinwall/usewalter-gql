import React from "react";
import Link from "next/link";
import UserLoginForm from "../../components/forms/user";

const handleSubmit = async (formValues) => {
  alert(JSON.stringify(formValues));
  return;
  try {
    const success = await newPackage({
      variables: {
        description: formValues.description,
        unit: Number(formValues.unit),
      },
    });
    setPak(formValues);
    console.table(success.data);

    // redirect to security
  } catch (error) {
    console.log(error);
    setError("Invalid unit");
    // error
  }
};

const UserLogin = () => {
  return (
    <div>
      <h3>User Login</h3>
      <UserLoginForm callback={handleSubmit} />

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
