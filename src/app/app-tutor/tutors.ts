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

export const TUTORS = [
  {
    name: 'Manuel',
    firstSurname: 'Borena',
    secondSurname: 'García',
    country: 'España',
    descriptionShort: 'Ingeniero de software con más de 10 años de experiencia',
    descriptionLong:
      'Tengo más de 10 años de experiencia como ingeniero de software en diferentes áreas como full-stack, desarrollador de front-end y back-end. Actualmente trabajo en Ineco como ingeniero de software y en mi tiempo libre imparto clases de programación y tecnologías full-stack. Enseño a alumnos de todas las edades y conocimientos. Soy bilingüe en español e inglés y tengo conocimientos básicos de alemán.',
    rate: 5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Español', level: 'Nativo' },
      { language: 'Inglés', level: 'C2' },
      { language: 'Francés', level: 'B1' },
    ],
    subjects: [
      {
        subject: 'Programación',
        levels: ['Primaria', 'Secundaria', 'Superior/bachillerato', 'Universidad'],
      },
      {
        subject: 'Python, C++, Java',
        levels: ['Primaria', 'Secundaria', 'Superior/bachillerato', 'Universidad'],
      },
      {
        subject: 'Front-end: Angular y React',
        levels: ['Primaria', 'Secundaria', 'Superior/bachillerato', 'Universidad'],
      },
      {
        subject: 'Back-end: AWS',
        levels: ['Primaria', 'Secundaria', 'Superior/bachillerato', 'Universidad'],
      },
    ],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Ben es un excelente profesor, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de él y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Ben es un excelente profesor, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de él y he mejorado mis notas en la universidad.',
      },
    ],
  },
];
