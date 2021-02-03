import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IIcons {
  [key: string]: IIconStates;
}

export interface IIconStates {
  [key: string]: IconDefinition;
}

export interface IDevStack  {
  ts?: boolean;
  react?: boolean;
  php?: boolean;
  laravel?: boolean;
  mysql?: boolean;
  firebase?: boolean;
}