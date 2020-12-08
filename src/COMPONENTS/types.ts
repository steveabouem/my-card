import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IIcons {
  [key: string]: IIconStates;
}

export interface IIconStates {
  [key: string]: IconDefinition;
}