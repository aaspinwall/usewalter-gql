import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';

const content = {
  placeholders: {
    email: 'email*',
    password: 'password*',
  },
  initialValues: {
    email: 'dallas77@gmail.com',
    password: '1GakguWu1ETAIaP',
  },
};

/* 
User for demo
kaleb.stoltenberg@gmail.com
636K0Hamn9otKb_
*/

// prettier-ignore
interface Errors {
  email?: string;
  password?: string;
}

const validate = async (values) => {
  const errors: Errors = {};
  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) errors.password = 'This field is required';

  return errors;
};

const UserForm = ({ callback, invalidMessage }) => {
  React.useEffect(() => {
    const inputs = document.getElementsByTagName('input');
    Object.values(inputs).forEach((v) => {
      v.autocomplete = 'off';
    });
  }, []);

  const handleSubmit = (values) => {
    callback(values);
  };

  const errorMessage = ({ children }) => <div style={{ color: 'red', height: '2rem' }}>{children}</div>;

  return (
    <div>
      <Formik initialValues={content.initialValues} validate={validate} onSubmit={handleSubmit}>
        {({ isSubmitting, isValid, isValidating }) => (
          <Form>
            <div id="top-form">
              <div>
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" placeholder={content.placeholders.email}></Field>
                <ErrorMessage name="email" component={errorMessage} />
              </div>

              <div>
                <label htmlFor="password">Password </label>
                <Field type="password" name="password" placeholder={content.placeholders.password} />
                <ErrorMessage name="password" component={errorMessage} />
              </div>
            </div>

            <button disabled={!isValid}>submit</button>

            <div>{isValidating ? '...Validating' : null}</div>
            <div>{isSubmitting ? invalidMessage || "We're working on your request..." : null}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
