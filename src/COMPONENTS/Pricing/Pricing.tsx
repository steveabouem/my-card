import React from 'react';
import '../../UTILS/i18n/config';
import { useTranslation } from 'react-i18next';
import { StyledPaddedContentWrap, StyledPricingBlock, StyledPricingBlockContainer } from '../styles';
import {useInView} from "react-intersection-observer";
import SectionTitle from "../common/SectionTitle";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pricing = (): JSX.Element => {
    const { t } = useTranslation(['ns8']);
    const { ref, inView } = useInView();

    return (
        <StyledPaddedContentWrap ref={ref}>
            <div className="h-100 w-100">
                {inView && <SectionTitle title={t('ns8:section_title')} isInView={inView} section="pricing" />}
                   <StyledPricingBlockContainer>
                       {inView && (
                            <>
                                <StyledPricingBlock>
                                    <div className="header">
                                        {t('ns8:option_2:header')}
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </div>
                                    <div className="py-2">{t('ns8:option_1:content:parag_1')}</div>
                                    <div className="py-2">{t('ns8:option_1:content:parag_2')}</div>
                                    <div className="py-2">{t('ns8:option_1:content:parag_3')}</div>
                                    <div className="py-2">{t('ns8:option_1:content:c2a')}</div>
                                </StyledPricingBlock>

                                <StyledPricingBlock>
                                    <div className="header">
                                        {t('ns8:option_2:header')}
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </div>
                                    <div className="py-2">{t('ns8:option_2:content:parag_1')}</div>
                                    <div className="py-2">{t('ns8:option_2:content:parag_2')}</div>
                                    <div className="py-2">{t('ns8:option_2:content:parag_3')}</div>
                                    <div className="py-2">{t('ns8:option_2:content:c2a')}</div>
                                </StyledPricingBlock>

                                <StyledPricingBlock>
                                    <div className="header">
                                        {t('ns8:option_3:header')}
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </div>
                                    <div className="py-2">{t('ns8:option_3:content:parag_1')}</div>
                                    <div className="py-2">{t('ns8:option_3:content:parag_2')}</div>
                                    <div className="py-2">{t('ns8:option_3:content:parag_3')}</div>
                                    <div className="py-2">{t('ns8:option_3:content:c2a')}</div>
                                </StyledPricingBlock>
                            </>
                       )}
                   </StyledPricingBlockContainer>
               </div>
        </StyledPaddedContentWrap>
    );
};

export default Pricing;