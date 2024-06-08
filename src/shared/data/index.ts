// import infoImage0 from '../images/0_semen_katz.jpg';
// import infoImage1 from '../images/1_semen_katz_bts.jpg';
// import infoImage2 from '../images/2_semen_katz_bts.jpg';
// import mainImage0 from '../images/0_main.jpg';
// import mainImage1 from '../images/1_main.jpg';
// import mainImage2 from '../images/2_main.jpg';
// import mainImage3 from '../images/3_main.jpg';
// import mainImage4 from '../images/4_main.jpg';

// export const globalData = {
//   hero: {
//     title: 'Semen Katz',
//   },
//   header: {
//     title: 'Semen Katz',
//   },
//   imagesMain: [
//     {
//       link: mainImage0,
//       alt: 'Portrait of writer Kira Yarmisch',
//     },
//     {
//       link: mainImage1,
//       alt: 'Portrait of Andrey Gevak, head of Yandex Music',
//     },
//     {
//       link: mainImage2,
//       alt: 'Cockpit of A321 aircraft',
//     },
//     {
//       link: mainImage3,
//       alt: 'Engine of A321 aircraft',
//     },
//     {
//       link: mainImage4,
//       alt: 'Laboratory equipment',
//     },
//   ],

// };

export interface IprojectPageCategory {
  name: string;
  type: 'category';
  text: string;
  wip: boolean;
}

export const projectPagesCategories: IprojectPageCategory[] = [
  {
    name: 'people',
    type: 'category',
    text: '',
    wip: true,
  },
  {
    name: 'official',
    type: 'category',
    text: '',
    wip: false,
  },
  {
    name: 'enterprises',
    type: 'category',
    text: '',
    wip: true,
  },
  {
    name: 'lifestyle',
    type: 'category',
    text: '',
    wip: true,
  },
  {
    name: 'sports',
    type: 'category',
    text: '',
    wip: true,
  },
  {
    name: 'media',
    type: 'category',
    text: '',
    wip: true,
  },
  {
    name: 'web',
    type: 'category',
    text: '',
    wip: true,
  },
];

export interface IinfoPageCategory {
  name: string;
  text: string;
  [key: string]: any;
}

export const infoPagesCategories: IinfoPageCategory[] = [
  {
    name: 'about',
    text: '',
    info: {
      title: '',
      text: [
        'Semen Katz is a portrait and documentary photographer, known for capturing stunning images of billionaire entrepreneurs and CEOs listed on FORBES, as well as for his work covering the manufacturing and R&D industries, technology and science-related subjects, and startups. He is also deeply passionate about capturing the beauty and power of athletes in action.',
        'After earning Master degree in radio engineering, Semen went on to graduate from Rodchenko School of Photography and Multimedia in Moscow. He also took part in documentary photography workshops by International Summer School Photography in Latvia.',
        'Semen has a wealth of experience producing top-quality images under a variety of working conditions. These cases include media, business and personal commissions made with varying sizes of production scales.',
        'Semen lives between Haifa, Israel and Moscow, Russia, speaks native Russian and fluent English and is available for comissions worldwide.',
      ],
      clients: [
        'Forbes, INC Russia, Meduza, Timeout, Men’s Health, WHEELY, Yandex, British American Tobacco, Moscow Marathon, Asics, Nike, Governments of Moscow, Tatarstan, Murmansk regions',
      ],
      rights: [
        'All Rights Reserved. Usage of any of the content of this website or of any of it’s parts is allowed only with a written permission of the Author © 2023',
      ],
    },
    // images: [
    //   {
    //     link: infoImage0,
    //     alt: 'Semen Katz portrait by Tikhon Bazilevskiy',
    //   },
    //   {
    //     link: infoImage1,
    //     alt: 'Backstage shot of Semen Katz`s photoshoot',
    //   },
    //   {
    //     link: infoImage2,
    //     alt: 'Backstage shot of Semen Katz`s photoshoot',
    //   },
    // ],
  },
  {
    name: 'downloads',
    text: '',
    downloads: [
      {
        link: {
          url: 'https://disk.yandex.ru/i/O44q9H-d_Q7OIA',
          text: 'Business portfolio.pdf',
        },
        text: '',
      },
      {
        link: {
          url: 'https://disk.yandex.ru/i/jLSrs-9uDTdWPw',
          text: 'Industrial portfolio.pdf',
        },
        text: '',
      },
    ],
  },
  {
    name: 'contacts',
    text: '',
    contacts: [
      {
        type: '',
        link: {
          url: 'tel:+79165226935',
          text: '+7 916 522–69–35',
        },
        text: ', Moscow, RU',
      },
      {
        type: '',
        link: {
          url: 'tel:+972552933046',
          text: '+972 55 293–30–46',
        },
        text: ', Haifa, IL',
      },
      {
        type: '',
        link: {
          url: 'mailto:kavabunga@gmail.com',
          text: 'kavabunga@gmail.com',
        },
        text: '',
      },
      {
        type: '',
        link: {
          url: 'https://t.me/kavabunga',
          text: 'kavabunga',
        },
        text: ' at social networks',
      },
    ],
  },
];
