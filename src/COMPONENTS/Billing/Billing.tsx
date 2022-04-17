import React from 'react';
import '../../UTILS/i18n/config';
import { useTranslation } from 'react-i18next';
import { StyledPaddedContentWrap, StyledBillingBlock, StyledPricingBlockContainer } from '../styles';
import {useInView} from "react-intersection-observer";
import SectionTitle from "../common/SectionTitle";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Billing = (): JSX.Element => {
    const { t } = useTranslation(['ns8']);
    const { ref, inView } = useInView();

    return (
        <StyledPaddedContentWrap ref={ref}>
            <div className="h-100 w-100">
                {inView && <SectionTitle title={t('ns8:section_title')} isInView={inView} section="billing" />}
                   <StyledPricingBlockContainer>
                       {inView && (
                            <>
                                <StyledBillingBlock>
                                    <div className="header">
                                        {t('ns8:option_1:header')}
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </div>
                                    <div>{t('ns8:option_1:content:parag_1')}</div>
                                    <div>{t('ns8:option_1:content:parag_2')}</div>
                                    <div>{t('ns8:option_1:content:parag_3')}</div>
                                    <div>{t('ns8:option_1:content:c2a')}</div>
                                </StyledBillingBlock>

                                <StyledBillingBlock>
                                    <div className="header">
                                        {t('ns8:option_1:header')}
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </div>
                                    <div>{t('ns8:option_1:content:parag_1')}</div>
                                    <div>{t('ns8:option_1:content:parag_2')}</div>
                                    <div>{t('ns8:option_1:content:parag_3')}</div>
                                    <div>{t('ns8:option_1:content:c2a')}</div>
                                </StyledBillingBlock>

                                <StyledBillingBlock>
                                    <div className="header">
                                        {t('ns8:option_1:header')}
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </div>
                                    <div>{t('ns8:option_1:content:parag_1')}</div>
                                    <div>{t('ns8:option_1:content:parag_2')}</div>
                                    <div>{t('ns8:option_1:content:parag_3')}</div>
                                    <div>{t('ns8:option_1:content:c2a')}</div>
                                </StyledBillingBlock>
                            </>
                       )}
                   </StyledPricingBlockContainer>
               </div>
        </StyledPaddedContentWrap>
    );
};

export default Billing;