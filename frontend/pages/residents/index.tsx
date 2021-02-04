import React from "react";
import Link from "next/link";

const UserLogin = () => {
  return (
    <div>
      <h3>User Login</h3>
      <div>email</div>
      <div>password</div>
      <Link href='/residents/5'>
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default UserLogin;
