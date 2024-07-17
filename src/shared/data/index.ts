import { Metadata } from 'next';

export const globalData = {
  title: 'Semyon Katz',
  author: 'Semyon Katz',
  authorUrl: 'https://github.com/kavabunga',
  siteName: 'Semyon Katz portfolio',
  subtitle: 'Photographer & web developer',
  description:
    'Semyon Katz, multifaceted talent in photography and web development. Shooting billionaire entrepreneurs, CEOs, manufacturing and R&D industries, technology and science-related subjects, startups and more.',
  descriptionShort:
    'Semyon Katz, multifaceted talent in photography and web development',
};

export const globalMetadata: Metadata = {
  title: globalData.title,
  description: globalData.description,
  generator: 'Next.js',
  applicationName: globalData.siteName,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Semyon Katz',
    'Semyon Kats',
    'Semen Katz',
    'Semen Kats',
    'Katz',
    'Kats',
    'photography',
    'portrait',
    'reportage',
    'documentary',
    'photo',
    'media',
    'frontend',
    'web',
    'developer',
    'Next.js',
    'React',
  ],
  authors: [{ name: globalData.author, url: globalData.authorUrl }],
  creator: globalData.author,
  metadataBase: new URL(
    `https://${process.env.NEXT_PUBLIC_DOMAIN || 'semyon.io'}`
  ),
  openGraph: {
    title: globalData.title,
    description: globalData.descriptionShort,
    url: '/',
    siteName: globalData.siteName,
    images: [
      {
        url: '/semyon-katz-s.jpeg',
        width: 400,
        height: 400,
        alt: 'Semyon Katz',
      },
      {
        url: '/semyon-katz-m.jpeg',
        width: 800,
        height: 800,
        alt: 'Semyon Katz',
      },
      {
        url: '/semyon-katz-l.jpeg',
        width: 1500,
        height: 1500,
        alt: 'Semyon Katz',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    creator: '@kavabunga',
  },
  robots: {
    // index: false,
    // follow: true,
    // nocache: true,
    googleBot: {
      index: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'google',
  //   yandex: 'yandex',
  //   yahoo: 'yahoo',
  //   other: {
  //     me: ['my-email', 'my-link'],
  //   },
  // },
};

export interface IprojectPageCategory {
  name: string;
  type: 'category';
  text: string;
  wip: boolean;
  metadata: Metadata;
}

export const projectPagesCategories: IprojectPageCategory[] = [
  {
    name: 'people',
    type: 'category',
    text: '',
    wip: true,
    metadata: {
      title: `${globalData.title} | People`,
      description:
        'Portraits. Commercial and editorial photography by Semyon Katz',
    },
  },
  {
    name: 'official',
    type: 'category',
    text: '',
    wip: false,
    metadata: {
      title: `${globalData.title} | Official`,
      description:
        'Official portraits. Commercial and editorial photography by Semyon Katz',
    },
  },
  {
    name: 'enterprises',
    type: 'category',
    text: '',
    wip: false,
    metadata: {
      title: `${globalData.title} | Enterprises`,
      description:
        'Enterprise, business, R&D, technology and science photography by Semyon Katz',
    },
  },
  {
    name: 'lifestyle',
    type: 'category',
    text: '',
    wip: true,
    metadata: {},
  },
  {
    name: 'sports',
    type: 'category',
    text: '',
    wip: true,
    metadata: {},
  },
  {
    name: 'media',
    type: 'category',
    text: '',
    wip: true,
    metadata: {},
  },
];

interface Ilink {
  type: string | null;
  link: {
    url: string;
    text: string;
  };
  text: string | null;
}

interface IinfoPage {
  name: string;
  title: string | null;
  text: string[] | null;
  metadata: Metadata;
}
export interface IaboutPageData extends IinfoPage {
  clients: string[] | null;
  rights: string[] | null;
}

export const aboutPageData: IaboutPageData = {
  name: 'about',
  title: null,
  text: [
    'Semyon Katz is\u00A0a\u00A0skilled professional photographer and a\u00A0web developer. Renowned for capturing images of\u00A0influential figures featured in\u00A0FORBES and delving into diverse projects, including technology, sports and education. Semyon is\u00A0a\u00A0versatile creative.',
    'With a\u00A0Master\u2019s in\u00A0radio engineering and training from the Rodchenko School of\u00A0Photography and Yandex. Practicum, Semyon seamlessly integrates his skills of\u00A0photography and coding.',
    'Currently based in\u00A0Haifa, Israel, Semyon is\u00A0open to\u00A0global commissions. Beyond his technical skills, he\u00A0remains committed to\u00A0exploring new projects, focusing on\u00A0portrait and sport photography and web development and is\u00A0open to\u00A0volunteering opportunities.',
  ],
  clients: [
    'Forbes, INC Russia, Timeout, Men\u2019s Health, WHEELY, Yandex, British American Tobacco, Governments of\u00A0Russian regions, Moscow Marathon, Asics, Nike, GRI 🖤',
  ],
  rights: [
    'All Rights Reserved. Usage of\u00A0any of\u00A0the content of\u00A0this website or\u00A0of\u00A0any of\u00A0it\u2019s parts is\u00A0allowed only with a\u00A0written permission of\u00A0the Author \u00A9\u00A02024',
  ],
  metadata: {
    title: `${globalData.title} | About`,
    description:
      'Information about Semyon Katz, professional photographer and web developer',
  },
};
export interface IlinksPageData extends IinfoPage {
  links: Ilink[] | null;
}

export const downloadsPageData: IlinksPageData = {
  name: 'downloads',
  title: null,
  text: null,
  links: [
    {
      type: 'pdf',
      link: {
        url: 'https://semyonkatz.imgix.net/pdfs/Semyon Katz business portraiture portfolio.pdf',
        text: 'Business photography portfolio',
      },
      text: '(15 Mb)',
    },
  ],
  metadata: {
    title: `${globalData.title} | Downloads`,
    description: 'PDF portfolios and other files, shared by Semyon Katz',
  },
};

export const contactsPageData: IlinksPageData = {
  name: 'contacts',
  title: null,
  text: null,
  links: [
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
  metadata: {
    title: `${globalData.title} | Contacts`,
    description: 'Semyon Katz contacts',
  },
};

export type IinfoPageCategory = IaboutPageData | IlinksPageData;

export const infoPagesCategories = [
  aboutPageData,
  downloadsPageData,
  contactsPageData,
];
