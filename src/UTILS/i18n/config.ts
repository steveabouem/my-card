import i18n from 'i18next';
import ns6_en from './en/ns6.json';
import ns5_en from './en/ns5.json';
import ns4_en from './en/ns4.json';
import ns3_en from './en/ns3.json';
import ns2_en from './en/ns2.json';
import ns1_en from './en/ns1.json';
import ns7_en from './en/ns7.json';
import ns6 from './fr/ns6.json';
import ns5 from './fr/ns5.json';
import ns4 from './fr/ns4.json';
import ns3 from './fr/ns3.json';
import ns2 from './fr/ns2.json';
import ns1 from './fr/ns1.json';
import ns7 from './fr/ns7.json';

import { initReactI18next } from 'react-i18next';

export const resources = {
    fr: {
        ns1,
        ns2,
        ns3,
        ns4,
        ns5,
        ns6,
        ns7
    },
    en: {
        ns1: ns1_en,
        ns2: ns2_en,
        ns3: ns3_en,
        ns4: ns4_en,
        ns5: ns5_en,
        ns6: ns6_en,
        ns7: ns7_en
    }
} as const;

i18n.use(initReactI18next).init({
    lng: 'en',
    ns: ['ns1', 'ns2', 'ns3', 'ns4', 'ns5', 'ns6', 'ns7'],
    resources,
});