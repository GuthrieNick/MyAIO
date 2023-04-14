export interface Item {
  name: string;
  quantity: number;
  index: number;
}

export const defaultItem: Item = {
  name: '',
  index: 0,
  quantity: 1,
};

export type Items = Item[];

export interface Recent {
  name: string;
  favorite: boolean;
}

export type Recents = Recent[];

export const defaultRecent: Recent = {
  name: '',
  favorite: false,
};

export enum ColorTheme {
  DARK,
  LIGHT,
}
