import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";

const content = {
  placeholders: {
    first: "First Name*",
    last: "Last Name*",
    email: "Email Address*",
    company: "Company*",
    promoCode: "Do you have a promo code?",
  },
  initialValues: {
    first: "",
    last: "",
    email: "",
    company: "",
    promoCode: "",
  },
};

interface Errors {
  first: string;
  last: string;
  email: string;
  company: string;
}

const validate = async (values) => {
  const errors: Errors = {};
  if (!values.first) errors.first = "This field is required";
  if (!values.last) errors.last = "This field is required";
  if (!values.company) errors.company = "This field is required";
  if (!values.email) {
    errors.email = "This field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const handleSubmit = (e) => {
  console.log(e);
};

const Contact = () => {
  React.useEffect(() => {
    const inputs = document.getElementsByTagName("input");
    Object.values(inputs).forEach((v) => {
      v.autocomplete = "off";
    });
  }, []);

  return (
    <div>
      <Formik
        initialValues={content.initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, isValidating }) => (
          <Form>
            <div id='top-form'>
              <div>
                <label htmlFor='first'>First Name</label>
                <Field
                  type='text'
                  name='first'
                  placeholder={content.placeholders.first}
                ></Field>
                <ErrorMessage name='first' component='span' />
              </div>

              <div>
                <label htmlFor='last'>Last Name</label>
                <Field
                  type='text'
                  name='last'
                  placeholder={content.placeholders.last}
                />
                <ErrorMessage name='last' component='span' />
              </div>
            </div>

            <label htmlFor='email'>Email Address</label>
            <Field
              type='text'
              name='email'
              placeholder={content.placeholders.email}
            />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='company'>Company</label>
            <Field
              type='text'
              name='company'
              placeholder={content.placeholders.company}
            />
            <ErrorMessage name='company' component='span' />

            <label htmlFor='code'>Code</label>
            <Field
              type='text'
              name='promoCode'
              placeholder={content.placeholders.promoCode}
            />
            <ErrorMessage name='promoCode' component='span' />

            <button>submit</button>

            <div>{isValidating ? "...Validating" : null}</div>
            <div>{isSubmitting ? "...Submitting" : null}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
