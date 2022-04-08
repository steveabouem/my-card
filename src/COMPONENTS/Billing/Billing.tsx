import React from 'react';
import '../../UTILS/i18n/config';
import { useTranslation } from 'react-i18next';
import { StyledPaddedContentWrap } from '../styles';
import {useInView} from "react-intersection-observer";
import SectionTitle from "../common/SectionTitle";
import {StyledLargeText} from "../common";

const Billing = (): JSX.Element => {
    const { t } = useTranslation(['ns7']);
    const { ref, inView } = useInView();

    return (
        <StyledPaddedContentWrap ref={ref}>
            <div className="h-100">
                {inView && <SectionTitle title={t('ns7:section_title')} isInview={inView} />}
               <div>
                   <div></div>
                   <p>{t('ns7:parag_1')}</p>
               </div>
               <div></div>
               <div></div>
            </div>
        </StyledPaddedContentWrap>
    );
};

export default Billing;