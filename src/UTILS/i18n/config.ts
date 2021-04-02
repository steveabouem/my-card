import i18n from 'i18next';
import ns3_en from './en/ns3.json';
import ns2_en from './en/ns2.json';
import ns1_en from './en/ns1.json';
import ns3 from './fr/ns3.json';
import ns2 from './fr/ns2.json';
import ns1 from './fr/ns1.json';

import { initReactI18next } from 'react-i18next';

export const resources = {
    fr: {
        ns1,
        ns2,
        ns3
    },
    en: {
        ns1: ns1_en,
        ns2: ns2_en,
        ns3: ns3_en
    }
} as const;

i18n.use(initReactI18next).init({
    lng: 'en',
    ns: ['ns1', 'ns2', 'ns3'],
    resources,
});