import React from 'react';
import '../../UTILS/i18n/config';
import { useTranslation } from 'react-i18next';
import { StyledPaddedContentWrap, StyledServiceCard } from '../styles';
import {useInView} from "react-intersection-observer";
import SectionTitle from "../common/SectionTitle";
import {faComment, faMobileAlt, faTools} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = (): JSX.Element => {
    const { t } = useTranslation(['ns7']);
    const { ref, inView } = useInView();

    return (
        <StyledPaddedContentWrap ref={ref}>
            <div className="h-100">
                <div className="pb-2">
                    {inView && <SectionTitle title={t('ns7:section_title')} isInview={inView} />}
                    <p>{t('ns7:parag_1')}</p>
                    <p>{t('ns7:parag_2')}</p>
                    <p>{t('ns7:parag_3')}</p>
                    <p>{t('ns7:parag_4')}</p>
                </div>
                <div className="d-flex justify-content-between w-100">
                    <StyledServiceCard>
                        <div className="header">
                            <div>
                                {t('ns7:pitch_respve:header')}
                            </div>
                            <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        <p>{t('ns7:pitch_respve:content')}</p>
                    </StyledServiceCard>
                    <StyledServiceCard>
                        <div className="header">
                            <div>
                                {t('ns7:pitch_edit:header')}
                            </div>
                            <FontAwesomeIcon icon={faTools} />
                        </div>
                        <p>{t('ns7:pitch_edit:content')}</p>
                    </StyledServiceCard>
                    <StyledServiceCard>
                        <div className="header">
                            <div>
                                {t('ns7:pitch_review:header')}
                            </div>
                            <FontAwesomeIcon icon={faComment} />
                        </div>
                        <p>{t('ns7:pitch_review:content:reg')}</p>
                        <p>{t('ns7:pitch_review:content:strong')}</p>
                    </StyledServiceCard>
                </div>
            </div>
        </StyledPaddedContentWrap>
    );
};

export default Services;