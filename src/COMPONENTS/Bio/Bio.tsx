import React from 'react';
import { useInView } from 'react-intersection-observer';
import {useTranslation} from "react-i18next";
import '../../UTILS/i18n/config';
import SectionTitle from '../common/SectionTitle';
import { StyledPaddedContentWrap } from '../styles';

const Bio = (): JSX.Element => {
  const { ref, inView } = useInView();
  const { t } = useTranslation(['ns1']);
  
  return (
    <StyledPaddedContentWrap>
      <div ref={ref}>
        {inView && <SectionTitle title={t('ns1:section_title')} isInview={inView} />}
        <div>{t('ns1:parag_1')}</div>
        <div>{t('ns1:parag_2')}</div>
        <div>{t('ns1:parag_3')}</div>
      </div>
    </StyledPaddedContentWrap>
  );
}

export default Bio;