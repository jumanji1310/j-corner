export type Video = {
  id: string;
  title: string;
  date: string;
  url: string;
  thumbnail: string;
};

export type SortOption =
  | "default"
  | "title-asc"
  | "title-desc"
  | "date-asc"
  | "date-desc";