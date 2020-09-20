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
  Primary = 'Primaria',
  Secondary = 'Secundaria',
  Superior = 'Superior/bachillerato',
  University = 'Universidad',
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
}
