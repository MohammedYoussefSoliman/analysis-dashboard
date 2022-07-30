export type UIState = {
  mode: "dark" | "light";
  language: "en" | "ar";
};

type Months =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

export type CourseState = {
  id: string;
  month: Months;
  camp: string;
  country: string;
  school: string;
  lessons: number;
  checked: boolean;
};
