import React from 'react';
import { Formik, useFormikContext } from 'formik';
import * as Yup from 'yup'; 
import { BounceLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useTranslation} from "react-i18next";
import '../../UTILS/i18n/config';
import {
  StyledButtonOverlay,
  StyledField, StyledFormWrapper,
  StyledInvalidMessage,
  StyledLabel,
  StyledLoaderWrap,
  StyledPaddedContentWrap
} from '../styles';
import { icons } from '../common';
import SectionTitle from '../common/SectionTitle';
import { useInView } from 'react-intersection-observer';

interface IContactFieldProps {
  name: string;
  label: string;
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
    const { t } = useTranslation(['ns4']);
  // TODO: should I add a way to make the form about either REVIEW or Request? exp: "reason" dropdown field, and a link in page description that sets the dropdown to the value they want
  // if you add this, then restore the Testimonials page
  const { ref, inView } = useInView();

  return (
    <StyledPaddedContentWrap ref={ref}>
        {inView && <SectionTitle title={t('ns4:section_title')} isInview={inView} />}
        <div>{t('ns4:parag_1')}</div>
        <div className="font-weight-bold py-3">{t('ns4:parag_2')}</div>
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
            <ContactField type="email" name="email" label={t('ns4:email')} />
            <ContactField type="name" name="name" label={t('ns4:name')} />
            <div className="d-flex flex-column w-100">
              {errors.message && touched.message && (
                <StyledInvalidMessage className="invalid-message">
                  <FontAwesomeIcon icon={icons.danger.static} />
                  {errors.message}
                </StyledInvalidMessage>
              )}
              <StyledLabel>MESSAGE</StyledLabel>
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
                <div className="top">{t('ns4:submit')}</div>
              </div>
              <div className="hovered">
                <div className="top">{t('ns4:submit')}</div>
              </div>
            </StyledButtonOverlay>
          </form>
        </StyledFormWrapper>
        )}
      </Formik>
    </StyledPaddedContentWrap>
  );
};


const ContactField = ({name, label, customClass, type}: IContactFieldProps) => {
  const {touched, errors, handleChange, handleBlur}: any = useFormikContext();

  return (
    <div className="d-flex flex-column w-100">
      { errors[name] && touched[name] && (
        <StyledInvalidMessage className="invalid-message">
          <FontAwesomeIcon icon={icons.danger.static} />
          {errors[name]}
        </StyledInvalidMessage>
      )}
      <StyledLabel>{label.toUpperCase()}</StyledLabel>
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