import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NewPackageForm from '../../components/forms/pack';
import { CREATE_PACKAGE } from '../../components/polloTest/CreatePackage';
import { useMutation } from '@apollo/client';

const Success = ({ pak }) => {
  return (
    <div>
      <h3>Thank you!</h3>
      <p>{`You created a new package called ${pak.description}. The resident at unit ${pak.unit} will be notified soon`}</p>
      <Link href="/security">
        <a>Return to all packages</a>
      </Link>
    </div>
  );
};

const ErrorMessage = ({ children }) => {
  return <div>{children}</div>;
};

const NewPackage = () => {
  const [newPackage] = useMutation(CREATE_PACKAGE);
  const [pak, setPak] = useState(null);
  const [error, setError] = useState(null);

  const handleCreate = async (formValues) => {
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
      setError('Invalid unit');
      // error
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setPak(null);
        setError(null);
      }, 3000);
    }
  }, [error]);

  if (error) {
    return <ErrorMessage>Sorry, that is not a valid unit number. Please try again</ErrorMessage>;
  }

  return (
    <div>
      <h1>New package</h1>
      {pak ? <Success pak={pak} /> : <NewPackageForm callback={handleCreate} />}
    </div>
  );
};

export default NewPackage;
