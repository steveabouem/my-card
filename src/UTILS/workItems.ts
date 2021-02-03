import { IWorkItem } from "../API/dto/workItems.dto";

export const workiItems: IWorkItem[] = [
  {
    id: 1, 
    title: 'RAR du Quebec',
    url: 'https://rarduquebec.ca/',
    details: `There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by injected humour,
    or randomised words which don't look even slightly believable.`,
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
    details: `There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by injected humour,
    or randomised words which don't look even slightly believable.`,
    stack: {
      ts: false,
      react: true,
      php: false,
      laravel: false,
      mysql: false,
      firebase: true, 
    },
    preview: '...'
  },
  {
    id: 3,
    title: 'Coming Soon',
    url: null,
    details: `There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form, by injected humour,
    or randomised words which don't look even slightly believable.`,
    stack: {
      ts: true,
      react: true,
      php: false,
      laravel: false,
      mysql: false,
      firebase: true, 
    },
    preview: '...'
  }
];