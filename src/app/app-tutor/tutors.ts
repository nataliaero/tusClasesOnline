import { AvailabilityId, LanguageLevel, SubjectLevels, Tutor, DegreeType } from './types';

export const TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'Manuel',
    firstSurname: 'Borena',
    secondSurname: 'García',
    img: '/assets/tutor2.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'España',
    descriptionShort: 'Ingeniero de software',
    descriptionLong:
      'Tengo más de 10 años de experiencia como ingeniero de software en diferentes áreas como full-stack, desarrollador de front-end y back-end. Actualmente trabajo en Ineco como ingeniero de software y en mi tiempo libre imparto clases de programación y tecnologías full-stack. Enseño a alumnos de todas las edades y conocimientos. Soy bilingüe en español e inglés y tengo conocimientos básicos de alemán.',
    rate: 4.8,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [
      { title: DegreeType.Degree, description: 'Licenciado En Lengua Inglesa' },
      {
        title: DegreeType.Degree,
        description:
          'Licenciado en ingenieria de software por la Universidad Politécnica de Madrid (España)',
      },
      { title: DegreeType.Master, description: 'Postgrado en ciberseguridad' },
      {
        title: DegreeType.Doctorate,
        description: 'Doctorado en ciberseguridad por la Universidad de Estocolmo',
      },
    ],
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C1 },
      { language: 'Francés', level: LanguageLevel.B2 },
    ],
    subjects: [
      {
        subject: 'Programación',
        levels: [
          SubjectLevels.Preschool,
          SubjectLevels.Primary,
          SubjectLevels.Secondary,
          SubjectLevels.Superior,
          SubjectLevels.Adults,
          SubjectLevels.University,
        ],
      },
      {
        subject: 'Python, C++, Java',
        levels: [SubjectLevels.Primary, SubjectLevels.Superior, SubjectLevels.Adults],
      },
      {
        subject: 'Front-end: Angular y React',
        levels: [SubjectLevels.Primary, SubjectLevels.Superior, SubjectLevels.Adults],
      },
      {
        subject: 'Back-end: AWS',
        levels: [SubjectLevels.Superior, SubjectLevels.Adults],
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
    id: '2',
    name: 'Elena',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor3.jpg',
    video: '/assets/video-prueba.mp4',
    country: 'España',
    classDurationMinutes: 60,
    descriptionShort: 'Profesora de matemáticas',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de matemáticas a alumnos de diferentes edades, desde primaria hasta educación superior. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 5,
    fee: 15,
    ratingsCount: 4,
    classCount: 9,
    degrees: [
      { title: DegreeType.Certificate, description: 'Tesol 160 Hours' },
      { title: DegreeType.Certificate, description: 'Tefl 140 Hours' },
      { title: DegreeType.Certificate, description: 'City & Guilds D32' },
    ],
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
          SubjectLevels.Superior,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Matemáticas',
        levels: [
          SubjectLevels.Primary,
          SubjectLevels.Secondary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Cálculo',
        levels: [
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
    id: '3',
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    ratingsCount: 4,
    classCount: 59,
    classDurationMinutes: 30,
    degrees: [
      { title: DegreeType.Degree, description: 'Filología inglesa' },
      { title: DegreeType.Degree, description: 'Filología rusa' },
      { title: DegreeType.Certificate, description: 'City & Guilds D32' },
    ],
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
    id: '4',
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 30,
    degrees: [
      { title: DegreeType.Degree, description: 'Filología inglesa' },
      { title: DegreeType.Degree, description: 'Filología rusa' },
      { title: DegreeType.Certificate, description: 'City & Guilds D32' },
    ],
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C2 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Preschool,
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
    id: '5',
    name: 'Manuel',
    firstSurname: 'Borena',
    secondSurname: 'García',
    img: '/assets/tutor2.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'España',
    descriptionShort: 'Ingeniero de software',
    descriptionLong:
      'Tengo más de 10 años de experiencia como ingeniero de software en diferentes áreas como full-stack, desarrollador de front-end y back-end. Actualmente trabajo en Ineco como ingeniero de software y en mi tiempo libre imparto clases de programación y tecnologías full-stack. Enseño a alumnos de todas las edades y conocimientos. Soy bilingüe en español e inglés y tengo conocimientos básicos de alemán.',
    rate: 4.8,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [
      { title: DegreeType.Certificate, description: 'City & Guilds D32' },
      {
        title: DegreeType.Degree,
        description: 'Ingeriería de software en la Universidad Politécnica de Valencia',
      },
      {
        title: DegreeType.Doctorate,
        description: 'Doctorado en ciberseguridad en la Universidad de Lausanne en Suiza',
      },
    ],
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
          SubjectLevels.Secondary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Python, C++, Java',
        levels: [SubjectLevels.Superior, SubjectLevels.University, SubjectLevels.Adults],
      },
      {
        subject: 'Front-end: Angular y React',
        levels: [SubjectLevels.Superior, SubjectLevels.University, SubjectLevels.Adults],
      },
      {
        subject: 'Back-end: AWS',
        levels: [SubjectLevels.Superior, SubjectLevels.University, SubjectLevels.Adults],
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
    id: '6',
    name: 'Elena',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor3.jpg',
    video: '/assets/video-prueba.mp4',
    country: 'España',
    descriptionShort: 'Profesora de matemáticas',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de matemáticas a alumnos de diferentes edades, desde primaria hasta educación superior. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 5,
    fee: 15,
    ratingsCount: 4,
    classCount: 0,
    classDurationMinutes: 60,
    degrees: [],
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
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Matemáticas',
        levels: [SubjectLevels.Superior, SubjectLevels.University, SubjectLevels.Adults],
      },
      {
        subject: 'Cálculo',
        levels: [SubjectLevels.Superior, SubjectLevels.University, SubjectLevels.Adults],
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
    id: '7',
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [],
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C1 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [
          SubjectLevels.Preschool,
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
    id: '8',
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    ratingsCount: 4,
    classCount: 12,
    classDurationMinutes: 60,
    degrees: [
      { title: DegreeType.Certificate, description: 'City & Guilds D32' },
      {
        title: DegreeType.Degree,
        description: 'Ingeriería de software en la Universidad Politécnica de Valencia',
      },
      {
        title: DegreeType.Doctorate,
        description: 'Doctorado en software avanzado en la Universidad Politécnica de Valencia',
      },
    ],
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
    id: '9',
    name: 'Manuel',
    firstSurname: 'Borena',
    secondSurname: 'García',
    img: '/assets/tutor2.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'España',
    descriptionShort: 'Ingeniero de software',
    descriptionLong:
      'Tengo más de 10 años de experiencia como ingeniero de software en diferentes áreas como full-stack, desarrollador de front-end y back-end. Actualmente trabajo en Ineco como ingeniero de software y en mi tiempo libre imparto clases de programación y tecnologías full-stack. Enseño a alumnos de todas las edades y conocimientos. Soy bilingüe en español e inglés y tengo conocimientos básicos de alemán.',
    rate: 4.8,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [],
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C1 },
      { language: 'Francés', level: LanguageLevel.B2 },
    ],
    subjects: [
      {
        subject: 'Programación',
        levels: [SubjectLevels.Primary, SubjectLevels.Superior, SubjectLevels.Adults],
      },
      {
        subject: 'Python, C++, Java',
        levels: [SubjectLevels.Primary, SubjectLevels.Superior, SubjectLevels.Adults],
      },
      {
        subject: 'Front-end: Angular y React',
        levels: [SubjectLevels.Primary, SubjectLevels.Superior, SubjectLevels.Adults],
      },
      {
        subject: 'Back-end: AWS',
        levels: [SubjectLevels.Primary, SubjectLevels.Superior, SubjectLevels.Adults],
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
    id: '10',
    name: 'Elena',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor3.jpg',
    video: '/assets/video-prueba.mp4',
    country: 'España',
    descriptionShort: 'Profesora de matemáticas',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de matemáticas a alumnos de diferentes edades, desde primaria hasta educación superior. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 5,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [],
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
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Matemáticas',
        levels: [
          SubjectLevels.Preschool,
          SubjectLevels.Primary,
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Cálculo',
        levels: [SubjectLevels.Superior, SubjectLevels.University, SubjectLevels.Adults],
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
    id: '11',
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [],
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C2 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [SubjectLevels.Superior, SubjectLevels.University, SubjectLevels.Adults],
      },
      {
        subject: 'Inglés',
        levels: [
          SubjectLevels.Preschool,
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
    id: '12',
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [
      { title: DegreeType.Certificate, description: 'City & Guilds D32' },
      {
        title: DegreeType.Degree,
        description: 'Ingeriería de software en la Universidad Politécnica de Valencia',
      },
      {
        title: DegreeType.Doctorate,
        description: 'Doctorado en ciberseguridad en la Universidad de Lausanne en Suiza',
      },
    ],
    speaks: [
      { language: 'Ruso', level: LanguageLevel.Native },
      { language: 'Español', level: LanguageLevel.C2 },
      { language: 'Inglés', level: LanguageLevel.C2 },
    ],
    subjects: [
      {
        subject: 'Ruso',
        levels: [SubjectLevels.Primary],
      },
      {
        subject: 'Inglés',
        levels: [SubjectLevels.Primary],
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
    id: '13',
    name: 'Manuel',
    firstSurname: 'Borena',
    secondSurname: 'García',
    img: '/assets/tutor2.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'España',
    descriptionShort: 'Ingeniero de software',
    descriptionLong:
      'Tengo más de 10 años de experiencia como ingeniero de software en diferentes áreas como full-stack, desarrollador de front-end y back-end. Actualmente trabajo en Ineco como ingeniero de software y en mi tiempo libre imparto clases de programación y tecnologías full-stack. Enseño a alumnos de todas las edades y conocimientos. Soy bilingüe en español e inglés y tengo conocimientos básicos de alemán.',
    rate: 4.8,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [],
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C2 },
      { language: 'Francés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Programación',
        levels: [SubjectLevels.Adults],
      },
      {
        subject: 'Python, C++, Java',
        levels: [SubjectLevels.Adults],
      },
      {
        subject: 'Front-end: Angular y React',
        levels: [SubjectLevels.Adults],
      },
      {
        subject: 'Back-end: AWS',
        levels: [SubjectLevels.Adults],
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
    id: '14',
    name: 'Elena',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor3.jpg',
    video: '/assets/video-prueba.mp4',
    country: 'España',
    descriptionShort: 'Profesora de matemáticas',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de matemáticas a alumnos de diferentes edades, desde primaria hasta educación superior. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 5,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [],
    speaks: [
      { language: 'Español', level: LanguageLevel.Native },
      { language: 'Inglés', level: LanguageLevel.C2 },
      { language: 'Francés', level: LanguageLevel.B1 },
    ],
    subjects: [
      {
        subject: 'Álgebra',
        levels: [SubjectLevels.Primary, SubjectLevels.Secondary],
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
    id: '15',
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    ratingsCount: 4,
    classCount: 10,
    classDurationMinutes: 60,
    degrees: [],
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
          SubjectLevels.Superior,
          SubjectLevels.University,
          SubjectLevels.Adults,
        ],
      },
      {
        subject: 'Inglés',
        levels: [
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
    id: '16',
    name: 'Katrina',
    firstSurname: 'Reina del',
    secondSurname: 'Mar',
    img: '/assets/tutor.jpeg',
    video: '/assets/video-prueba.mp4',
    country: 'Rusia',
    descriptionShort: 'Profesora de ruso',
    descriptionLong:
      'Tengo más de 10 años de experiencia como profesora de ruso e inglés a niños y adulto. He trabajado en varios colegios públicos y privados y hablo perfecto inglés además de español.',
    rate: 2.5,
    fee: 15,
    ratingsCount: 4,
    classCount: 100,
    classDurationMinutes: 60,
    degrees: [],
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
