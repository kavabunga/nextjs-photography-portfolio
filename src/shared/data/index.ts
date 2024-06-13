export const globalData = {
  title: 'Semyon Katz',
  subtitle: 'Photographer &\u00A0web\u00A0developer',
};

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
};

export type IinfoPageCategory = IaboutPageData | IlinksPageData;

export const infoPagesCategories = [
  aboutPageData,
  downloadsPageData,
  contactsPageData,
];
