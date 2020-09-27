export interface TutorFilter {
  levels: SubjectLevels[];
  availability: AvailabilityId[];
  minPrice: number;
  maxPrice: number;
  keyword: string;
  sortBy: SortByType;
}

export type SortByType = 'popularity' | 'priceMax' | 'priceMin' | 'rating' | null;

export enum LanguageLevel {
  Native = 'Nativo',
  C2 = 'C2',
  C1 = 'C1',
  B2 = 'B2',
  B1 = 'B1',
  A2 = 'A2',
  A1 = 'A1',
}

export interface Language {
  language: string;
  level: LanguageLevel;
}

export enum SubjectLevels {
  Preschool = 'preschool',
  Primary = 'primary',
  Secondary = 'secondary',
  Superior = 'superior',
  University = 'university',
  Adults = 'adults',
}

export interface Subject {
  subject: string;
  levels: SubjectLevels[];
}

export interface Comment {
  name: string;
  date: number;
  comment: string;
}

export const enum AvailabilityId {
  Morning = 'morning',
  Afternoon = 'afternoon',
  Evening = 'evening',
  Weekends = 'weekends',
}

export interface Tutor {
  name: string;
  firstSurname: string;
  secondSurname: string;
  img: string;
  country: string;
  descriptionShort: string;
  descriptionLong: string;
  rate: number;
  fee: number;
  numberRatings: number;
  speaks: Language[];
  subjects: Subject[];
  comments: Comment[];
  availability: AvailabilityId[];
}
