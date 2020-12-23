import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { StyledButton, StyledButtonOverlay, StyledField, StyledFormWrapper } from '../styles';

interface Values {
  email: string;
  name: string;
  message: string;
}

const Contact = (): JSX.Element => {
  const [processing, setProcessing] = useState<boolean>(false);

  return (
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        // validate={values => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors?.email = 'Required';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Invalid email address';
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
        <StyledFormWrapper>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <StyledField
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* {errors.email && touched.email && errors.email} */}
            <StyledField
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledField
              type="message"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              className="message"
            />
            {/* {errors.message && touched.message && errors.message} */}
            <StyledButtonOverlay className="d-flex flex-column position-relative">
              <StyledButton type="submit" disabled={isSubmitting} />
              <span className="static">Submit</span>
              <span className="hovered">Submit</span>
            </StyledButtonOverlay>
          </form>
        </StyledFormWrapper>
        )}
      </Formik>
  );
};

export default Contact;