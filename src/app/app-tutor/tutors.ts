import { AvailabilityId, LanguageLevel, SubjectLevels, Tutor } from './types';

export const TUTORS: Tutor[] = [
  {
    name: 'Manuel',
    firstSurname: 'Borena',
    secondSurname: 'García',
    img: '/assets/tutor2.jpeg',
    country: 'España',
    descriptionShort: 'Ingeniero de software',
    descriptionLong:
      'Tengo más de 10 años de experiencia como ingeniero de software en diferentes áreas como full-stack, desarrollador de front-end y back-end. Actualmente trabajo en Ineco como ingeniero de software y en mi tiempo libre imparto clases de programación y tecnologías full-stack. Enseño a alumnos de todas las edades y conocimientos. Soy bilingüe en español e inglés y tengo conocimientos básicos de alemán.',
    rate: 4.8,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C1 },
      { language: 'Francés', level: LanguageLevel.B2 },
    ],
    subjects: [
      {
        subject: 'Programación',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Python, C++, Java',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Front-end: Angular y React',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Back-end: AWS',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning, AvailabilityId.Afternoon, AvailabilityId.Weekends],
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
  {
    name: 'Elena',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor3.jpg',
    country: 'España',
    descriptionShort: 'Profesora de matemáticas',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de matemáticas a alumnos de diferentes edades, desde primaria hasta educación superior. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C2 },
      { language: 'Francés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Álgebra',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Matemáticas',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Cálculo',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning, AvailabilityId.Afternoon, AvailabilityId.Weekends],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1291196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C2 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Inglés',
        levels: [
          SubjectLevels.Preschool,
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Weekends],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C2 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Inglés',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning, AvailabilityId.Weekends],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Manuel',
    firstSurname: 'Borena',
    secondSurname: 'García',
    img: '/assets/tutor2.jpeg',
    country: 'España',
    descriptionShort: 'Ingeniero de software',
    descriptionLong:
      'Tengo más de 10 años de experiencia como ingeniero de software en diferentes áreas como full-stack, desarrollador de front-end y back-end. Actualmente trabajo en Ineco como ingeniero de software y en mi tiempo libre imparto clases de programación y tecnologías full-stack. Enseño a alumnos de todas las edades y conocimientos. Soy bilingüe en español e inglés y tengo conocimientos básicos de alemán.',
    rate: 4.8,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C2 },
      { language: 'Francés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Programación',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Python, C++, Java',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Front-end: Angular y React',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Back-end: AWS',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [
      AvailabilityId.Morning,
      AvailabilityId.Afternoon,
      AvailabilityId.Evening,
      AvailabilityId.Weekends,
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
  {
    name: 'Elena',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor3.jpg',
    country: 'España',
    descriptionShort: 'Profesora de matemáticas',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de matemáticas a alumnos de diferentes edades, desde primaria hasta educación superior. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C2 },
      { language: 'Francés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Álgebra',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Matemáticas',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Cálculo',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [
      AvailabilityId.Morning,
      AvailabilityId.Afternoon,
      AvailabilityId.Evening,
      AvailabilityId.Weekends,
    ],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1291196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C1 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Inglés',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.B2 },
      { language: 'Inglés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Inglés',
        levels: [
          SubjectLevels.Preschool,
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning, AvailabilityId.Afternoon],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Manuel',
    firstSurname: 'Borena',
    secondSurname: 'García',
    img: '/assets/tutor2.jpeg',
    country: 'España',
    descriptionShort: 'Ingeniero de software',
    descriptionLong:
      'Tengo más de 10 años de experiencia como ingeniero de software en diferentes áreas como full-stack, desarrollador de front-end y back-end. Actualmente trabajo en Ineco como ingeniero de software y en mi tiempo libre imparto clases de programación y tecnologías full-stack. Enseño a alumnos de todas las edades y conocimientos. Soy bilingüe en español e inglés y tengo conocimientos básicos de alemán.',
    rate: 4.8,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C1 },
      { language: 'Francés', level: LanguageLevel.B2 },
    ],
    subjects: [
      {
        subject: 'Programación',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Python, C++, Java',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Front-end: Angular y React',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Back-end: AWS',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning, AvailabilityId.Afternoon, AvailabilityId.Weekends],
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
  {
    name: 'Elena',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor3.jpg',
    country: 'España',
    descriptionShort: 'Profesora de matemáticas',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de matemáticas a alumnos de diferentes edades, desde primaria hasta educación superior. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C2 },
      { language: 'Francés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Álgebra',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Matemáticas',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Cálculo',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning, AvailabilityId.Afternoon, AvailabilityId.Weekends],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1291196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C2 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Inglés',
        levels: [
          SubjectLevels.Preschool,
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Weekends],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C2 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Inglés',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning, AvailabilityId.Weekends],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Manuel',
    firstSurname: 'Borena',
    secondSurname: 'García',
    img: '/assets/tutor2.jpeg',
    country: 'España',
    descriptionShort: 'Ingeniero de software',
    descriptionLong:
      'Tengo más de 10 años de experiencia como ingeniero de software en diferentes áreas como full-stack, desarrollador de front-end y back-end. Actualmente trabajo en Ineco como ingeniero de software y en mi tiempo libre imparto clases de programación y tecnologías full-stack. Enseño a alumnos de todas las edades y conocimientos. Soy bilingüe en español e inglés y tengo conocimientos básicos de alemán.',
    rate: 4.8,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C2 },
      { language: 'Francés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Programación',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Python, C++, Java',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Front-end: Angular y React',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Back-end: AWS',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [
      AvailabilityId.Morning,
      AvailabilityId.Afternoon,
      AvailabilityId.Evening,
      AvailabilityId.Weekends,
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
  {
    name: 'Elena',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor3.jpg',
    country: 'España',
    descriptionShort: 'Profesora de matemáticas',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de matemáticas a alumnos de diferentes edades, desde primaria hasta educación superior. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C2 },
      { language: 'Francés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Álgebra',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Matemáticas',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Cálculo',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [
      AvailabilityId.Morning,
      AvailabilityId.Afternoon,
      AvailabilityId.Evening,
      AvailabilityId.Weekends,
    ],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1291196900000,
        comment:
          'Elena es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C1 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Inglés',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
  {
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    numberRatings: 4,
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.B2 },
      { language: 'Inglés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Inglés',
        levels: [
          SubjectLevels.Preschool,
          SubjectLevels.Primary,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
    ],
    availability: [AvailabilityId.Morning, AvailabilityId.Afternoon],
    comments: [
      {
        name: 'Alex',
        date: 1111196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
      {
        name: 'Elena',
        date: 1211196900000,
        comment:
          'Katrina es una excelente profesora, muy profesional y lo recomiendo enormemente. He aprendido muchísimo de ella y he mejorado mis notas en la universidad.',
      },
    ],
  },
];
