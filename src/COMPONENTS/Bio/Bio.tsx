import React from 'react';
import { useInView } from 'react-intersection-observer';
import {useTranslation} from "react-i18next";
import '../../UTILS/i18n/config';
import SectionTitle from '../common/SectionTitle';
import { StyledPaddedContentWrap } from '../styles';
import { StyledLargeText } from '../common';

const Bio = (): JSX.Element => {
  const { ref, inView } = useInView();
  const { t } = useTranslation(['ns1']);
  
  return (
    <StyledPaddedContentWrap>
      <div ref={ref} className="h-100">
        {inView && <SectionTitle title={t('ns1:section_title')} isInview={inView} />}
        <StyledLargeText height="15%">{t('ns1:parag_1')}</StyledLargeText>
        <StyledLargeText height="15%">{t('ns1:parag_2')}</StyledLargeText>
        <StyledLargeText height="15%">{t('ns1:parag_3')}</StyledLargeText>
      </div>
    </StyledPaddedContentWrap>
  );
}

export default Bio;