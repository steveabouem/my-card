import React, { useState } from 'react';
import { Formik, Form, FormikHelpers, useFormikContext, FieldProps } from 'formik';
import * as Yup from 'yup'; 
import { StyledButton, StyledButtonOverlay, StyledField, StyledFormWrapper, StyledInvalidMessage } from '../styles';

interface Values {
  email: string;
  name: string;
  message: string;
}

interface IContactFieldProps {
  name: string;
  customClass?: string;
  type?: string;
}

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid address.')
    .required('Required'),
  name: Yup.string()
    .min(4, '4 characters minimum.')
    .max(16, '16 characters maximum.')
    .required('Required'),
  message: Yup.string()
    .min(20, '20 characters minimum.')
    .max(200, '200 characters maximum.')
    .required('Required'),
});

const Contact = (): JSX.Element => {
  const [processing, setProcessing] = useState<boolean>(false);

  return (
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validationSchema={ContactSchema}
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
          isValid
        }) => (
        <StyledFormWrapper>
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <ContactField type="email" name="email" />
            <ContactField type="name" name="name" />
            <div className="d-flex flex-column w-100">
              {errors.message && touched.message && <StyledInvalidMessage className="invalid-message">{errors.message}</StyledInvalidMessage>}
              <StyledField
                name="message"
                as="textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                className={'message' + (errors.message && touched.message ? ' invalid' : '')}
              />
            </div>
            <StyledButtonOverlay className="d-flex flex-column position-relative">
              <StyledButton disabled={!isValid}>
                <div className="static">
                  <div className="top">Submit</div>
                </div>
                <div className="hovered">
                  <div>Submit</div>
                </div>
              </StyledButton>
            </StyledButtonOverlay>
          </form>
        </StyledFormWrapper>
        )}
      </Formik>
  );
};


const ContactField = ({name, customClass, type}: IContactFieldProps) => {
  const {touched, errors, handleChange, handleBlur}: any = useFormikContext();

  return (
    <div className="d-flex flex-column w-100">
      <StyledField
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={customClass + (errors[name] && touched[name] ? ' invalid' : '')}
      />
      { errors[name] && touched[name] && <StyledInvalidMessage className="invalid-message">{errors[name]}</StyledInvalidMessage> }
    </div>
  )
};
export default Contact;