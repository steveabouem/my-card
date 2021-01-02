import React from 'react';
import { Formik, useFormikContext } from 'formik';
import * as Yup from 'yup'; 
import { 
  StyledButtonOverlay, 
  StyledField, StyledFormWrapper,
  StyledInvalidMessage,
  StyledLoaderWrap
} from '../styles';
import { BounceLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons, StyledHeader } from '../common';

// interface Values {
//   email: string;
//   name: string;
//   message: string;
// }

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
});

const Contact = (): JSX.Element => {
  return (
    <>
      <StyledHeader>Reach Out!</StyledHeader>
      <div>I'd be happy to repl to any inquiries you have.</div>
      <div> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
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
          errors,
          touched,
          handleChange,
          submitForm,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid
        }) => (
        <StyledFormWrapper>
          {isSubmitting && (
            <StyledLoaderWrap>
              <BounceLoader
                size={150}
                css={`
                  opacity: .5;
                `}
                color="#0e155a"
                loading
              />
            </StyledLoaderWrap>
          )}
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            <ContactField type="email" name="email" />
            <ContactField type="name" name="name" />
            <div className="d-flex flex-column w-100">
              {errors.message && touched.message && (
                <StyledInvalidMessage className="invalid-message">
                  <FontAwesomeIcon icon={icons.danger.static} />
                  {errors.message}
                </StyledInvalidMessage>
              )}
              <StyledField
                name="message"
                as="textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                className={'message' + (errors.message && touched.message ? ' invalid' : '')}
              />
            </div>
            <StyledButtonOverlay 
              className={`d-flex flex-column position-relative ${!isValid ? ' invalid' : ''}`}
              onClick={submitForm}
            >
              <div className="static">
                <div className="top">Submit</div>
              </div>
              <div className="hovered">
                <div className="top">Submit</div>
              </div>
            </StyledButtonOverlay>
          </form>
        </StyledFormWrapper>
        )}
      </Formik>
    </>
  );
};


const ContactField = ({name, customClass, type}: IContactFieldProps) => {
  const {touched, errors, handleChange, handleBlur}: any = useFormikContext();

  return (
    <div className="d-flex flex-column w-100">
      { errors[name] && touched[name] && (
        <StyledInvalidMessage className="invalid-message">
          <FontAwesomeIcon icon={icons.danger.static} />
          {errors[name]}
        </StyledInvalidMessage>
      )}
      <StyledField
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={customClass + (errors[name] && touched[name] ? ' invalid' : '')}
      />
    </div>
  )
};

export default Contact;