import { IWorkItem } from "../../dto/workItems.dto";

export const workiItems: IWorkItem[] = [
  {
    id: 1,
    title: 'RAR du Quebec',
    url: 'https://rarduquebec.ca/',
    details: {en: "An online platform to bring together and help organize the collective of street performers throughout Quebec.", fr: "Une platte forme en ligne visant à réunir et organiser les divers acteurs des arts de rue du Québec." },
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
      en: "A location App for a restaurant`s delivery services. (Project in progress)",
      fr: "Une application de localisation pour un service de livraison. (Projet en cours)"
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