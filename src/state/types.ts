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

type SchoolType = {
  name: string;
  color: {
    light: string;
    dark: string;
  };
};

export type Course = {
  id: string;
  month: Months;
  camp: string;
  country: string;
  school: string;
  lessons: number;
};

export type ResponseCourse = {
  id: string;
  month: Months;
  camp: string;
  country: string;
  school: string;
  lessons: number;
};

export type CoursesFilterConfig = {
  selection: "country" | "camp" | "school";
  value: string;
  country: string;
  camp: string;
  school: string;
};

export type CheckedSchoolsConfig = {
  checked: boolean;
  value: string;
};

export type CoursesState = {
  courses: Course[];
  filteredCourses: Course[];
  error: string | null;
  filterConfig: CoursesFilterConfig;
  checkedSchool: string[];
  countries: string[];
  camps: string[];
  schools: string[];
  schoolsExtras: SchoolType[];
};
