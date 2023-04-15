export type EntryViewProps = {
  mood: string;
  saved: number;
  description: string;
};

export type EntryListViewProps = {
  entries: readonly EntryViewProps[];
};
