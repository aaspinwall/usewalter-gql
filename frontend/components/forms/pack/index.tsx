import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";

const content = {
  placeholders: {
    description: "Ex: Amazon box*",
    unit: "Ex: 403*",
  },
  initialValues: {
    description: "",
    unit: "",
  },
};

interface Errors {
  description?: string;
  unit?: string;
}

const validate = async (values) => {
  const errors: Errors = {};
  if (!values.description) errors.description = "This field is required";
  if (typeof values.unit !== "number")
    errors.unit = "This field must be a valid unit number";

  return errors;
};

const Contact = ({ callback }) => {
  React.useEffect(() => {
    const inputs = document.getElementsByTagName("input");
    Object.values(inputs).forEach((v) => {
      v.autocomplete = "off";
    });
  }, []);

  const handleSubmit = (values) => {
    callback(values);
  };

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
                <label htmlFor='description'>Package description</label>
                <Field
                  type='text'
                  name='description'
                  placeholder={content.placeholders.description}
                ></Field>
                <ErrorMessage name='description' component='span' />
              </div>

              <div>
                <label htmlFor='unit'>Unit number</label>
                <Field
                  type='number'
                  name='unit'
                  placeholder={content.placeholders.unit}
                />
                <ErrorMessage name='unit' component='span' />
              </div>
            </div>

            <button>submit</button>

            <div>{isValidating ? "...Validating" : null}</div>
            <div>{isSubmitting ? "...Please wait" : null}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
