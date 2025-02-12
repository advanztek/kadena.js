import { ProductIcons } from '@kadena/react-components';

import { ITopDoc } from '@/data/getTopDocs';
import { ReactNode } from 'react';

export type TagNameType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type LayoutType = 'full' | 'code' | 'landing' | 'home';

export interface ISubHeaderElement {
  tag: TagNameType;
  title?: string;
  slug?: string;
  children: ISubHeaderElement[];
}

export interface IPageMeta {
  title: string; // title of the HEAD info
  subTitle?: string;
  menu?: string; // name in the main menu
  order?: number;
  label: string; // name of the pagdescription: string;
  layout: LayoutType;
  description: string;
  lastModifiedDate?: Date;
  icon?: ProductIconNames;
}
export interface IMenuItem extends IPageMeta {
  root: string;
  isActive: boolean; // checks that the actual item is active in the menu
  isMenuOpen: boolean; // makes sure that the parent slide menu is open
  children: IMenuItem[];
}

export interface ILayout {
  children?: ReactNode;
  isAsideOpen?: boolean;
  aSideMenuTree?: ISubHeaderElement[];
}

export type LevelType = 1 | 2 | 3;

export type ProductIconNames = keyof typeof ProductIcons;

export interface IPageProps {
  children?: ReactNode;
  menuItems: IMenuItem[];
  aSideMenuTree: ISubHeaderElement[];
  frontmatter: IPageMeta;
  leftMenuTree: IMenuItem[];
  topDocs: ITopDoc[];
}
