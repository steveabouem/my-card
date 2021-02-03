import { IDevStack } from "../../COMPONENTS/types";

export interface IWorkItem {
  id: number,
  title: string,
  url: string | null,
  details: string,
  preview: string,
  stack: IDevStack,
}