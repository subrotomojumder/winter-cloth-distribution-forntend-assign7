import { LucideIcon } from "lucide-react";


export type TSideBarItem = {
  name: string;
  icon: LucideIcon;
  link?: string;
  subMenu?: {
    subName: string;
    subLink: string;
    subIcon: LucideIcon;
  }[];
};
