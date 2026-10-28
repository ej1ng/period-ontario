export type TeamMember = {
  name: string;
  role: string;
  imageSrc?: string;
};

export type OfficerGroup = {
  department: string;
  members: TeamMember[];
};

export const boardOfDirectors: TeamMember[] = [
  { role: "Board of Directors", name: "Alice Zou" },
  { role: "Board of Directors", name: "Aria Hwang" },
  { role: "Board of Directors", name: "Roy Cheng" },
];

export const leadership: TeamMember[] = [
  {
    role: "President",
    name: "Mehrava Afshani",
    imageSrc: "/team/mehrava-afshani.jpg",
  },
  {
    role: "Vice-President",
    name: "Valerie Tso",
    imageSrc: "/team/valerie-tso.jpg",
  },
];

export const departmentHeads: TeamMember[] = [
  {
    role: "Head of Advocacy",
    name: "Adele Feng",
    imageSrc: "/team/adele-feng.jpg",
  },
  {
    role: "Head of Education",
    name: "Catherine Li",
    imageSrc: "/team/catherine-li.jpg",
  },
  {
    role: "Head of Service",
    name: "Suhani Desai",
    imageSrc: "/team/suhani-desai.jpg",
  },
  {
    role: "Head of Communications",
    name: "Ava Fong",
    imageSrc: "/team/ava-fong.jpg",
  },
  {
    role: "Head of Finance",
    name: "Megan Cui",
    imageSrc: "/team/megan-cui.jpg",
  },
  { role: "People & Culture Exec", name: "Nivedha Thivaharan" },
];

export const officers: OfficerGroup[] = [
  {
    department: "Advocacy",
    members: [
      {
        role: "Advocacy Officer",
        name: "Rachael Lu",
        imageSrc: "/team/rachael-lu.jpg",
      },
      {
        role: "Advocacy Officer",
        name: "Milia Matsubara",
        imageSrc: "/team/milia-matsubara.jpg",
      },
      { role: "Advocacy Officer", name: "Kaarhunyaa Sivapalan" },
      {
        role: "Advocacy Officer",
        name: "Zofia Gotfryd",
        imageSrc: "/team/zofia-gotfryd.jpg",
      },
    ],
  },
  {
    department: "Education",
    members: [
      {
        role: "Education Officer",
        name: "Saanvi Rokandla",
        imageSrc: "/team/saanvi-rokandla.jpg",
      },
      {
        role: "Education Officer",
        name: "Anna Dai",
        imageSrc: "/team/anna-dai.jpg",
      },
    ],
  },
  {
    department: "Service",
    members: [
      {
        role: "Service Officer",
        name: "Kelly Liu",
        imageSrc: "/team/kelly-liu.jpg",
      },
      {
        role: "Service Officer",
        name: "Shiara Sribalan",
        imageSrc: "/team/shiara-sribalan.jpg",
      },
    ],
  },
  {
    department: "Communications",
    members: [
      {
        role: "Graphic Designer",
        name: "Alyssa Laviolette",
        imageSrc: "/team/alyssa-laviolette.jpg",
      },
      {
        role: "Graphic Designer",
        name: "Alicia Guo",
        imageSrc: "/team/alicia-guo.jpg",
      },
      {
        role: "Graphic Designer",
        name: "Rane Dorillo",
        imageSrc: "/team/rane-dorillo.jpg",
      },
      {
        role: "Social Media Coordinator",
        name: "Raya Mardani",
        imageSrc: "/team/raya-mardani.jpg",
      },
      { role: "Video Producer", name: "Hilary Tse" },
    ],
  },
  {
    department: "Website Development",
    members: [
      {
        role: "Website Developer",
        name: "Claire Zhang",
        imageSrc: "/team/claire-zhang.jpg",
      },
      { role: "Website Developer", name: "Emily Jing" },
    ],
  },
  {
    department: "Finance",
    members: [
      {
        role: "Finance Officer",
        name: "Navya Shrivastava",
        imageSrc: "/team/navya-shrivastava.jpg",
      },
      {
        role: "Finance Officer",
        name: "Tiffany Xu",
        imageSrc: "/team/tiffany-xu.jpg",
      },
      {
        role: "Finance Officer",
        name: "Rachel Pan",
        imageSrc: "/team/rachel-pan.jpg",
      },
    ],
  },
];
