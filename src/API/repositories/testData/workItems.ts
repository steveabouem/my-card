import { IWorkItem } from "../../dto/workItems.dto";

export const workiItems: IWorkItem[] = [
  {
    id: 1,
    title: 'RAR du Quebec',
    url: 'https://rarduquebec.ca/',
    details: {['en-CA']: 'An online platform to bring together and help organize the collective of street performers throughout Quebec.', fr: 'Une platte forme en ligne visant a\\uo300 re\\u0300nir et organiser les divers acteurs des arts de rue du Que\\u0300bec.' },
    stack: {
      ts: false,
      react: true,
      php: true,
      laravel: true,
      mysql: true,
      firebase: false,
    },
    preview: '...'
  },
  {
    id: 2,
    title: 'OU-T App',
    url: null,
    details: {
      ['en-CA']: "A location App for deleviry services requested by a restaurant in Ivory Coast. (Project in progress)",
      fr: "Une application de localisation pour aider le staff de livraison d'un restaurant en Co\u0302te-d'Ivoire."
    },
    stack: {
      ts: false,
      react: true,
      php: false,
      laravel: false,
      mysql: false,
      firebase: true,
    },
    preview: '...'
  }
];