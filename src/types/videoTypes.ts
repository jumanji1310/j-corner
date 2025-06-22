export type Video = {
  title: string;
  date: string;
  dateAdded: string;
  url: string;
  thumbnail: string;
};

export type SortOptionVideo =
  | "dateAdded-asc"
  | "dateAdded-desc"
  | "title-asc"
  | "title-desc"
  | "date-asc"
  | "date-desc";


export type SortOptionImage =
  | "default"
  | "date-asc"
  | "date-desc";