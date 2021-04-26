import { IDevStack } from "../../COMPONENTS/types";

export interface IWorkItem {
  id: number,
  title: string,
  url: string | null,
  details: any,
  preview: string,
  stack: IDevStack,
}