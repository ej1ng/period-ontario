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
  { role: "President", name: "Mehrava Afshani" },
  { role: "Vice-President", name: "Valerie Tso" },
];

export const departmentHeads: TeamMember[] = [
  { role: "Head of Advocacy", name: "Adele Feng" },
  { role: "Head of Education", name: "Catherine Li" },
  { role: "Head of Service", name: "Suhani Desai" },
  { role: "Head of Communications", name: "Ava Fong" },
  { role: "Head of Finance", name: "Megan Cui" },
  { role: "People & Culture Exec", name: "Nivedha Thivaharan" },
];

export const officers: OfficerGroup[] = [
  {
    department: "Advocacy",
    members: [
      { role: "Advocacy Officer", name: "Rachael Lu" },
      { role: "Advocacy Officer", name: "Milia Matsubara" },
      { role: "Advocacy Officer", name: "Kaarhunyaa Sivapalan" },
      { role: "Advocacy Officer", name: "Zofia Gotfryd" },
    ],
  },
  {
    department: "Education",
    members: [
      { role: "Education Officer", name: "Saanvi Rokandla" },
      { role: "Education Officer", name: "Anna Dai" },
    ],
  },
  {
    department: "Service",
    members: [
      { role: "Service Officer", name: "Kelly Liu" },
      { role: "Service Officer", name: "Shiara Sribalan" },
    ],
  },
  {
    department: "Communications",
    members: [
      { role: "Graphic Designer", name: "Alyssa Laviolette" },
      { role: "Graphic Designer", name: "Alicia Guo" },
      { role: "Graphic Designer", name: "Rane Dorillo" },
      { role: "Social Media Coordinator", name: "Raya Mardani" },
      { role: "Video Producer", name: "Hilary Tse" },
    ],
  },
  {
    department: "Website Development",
    members: [
      { role: "Website Developer", name: "Claire Zhang" },
      { role: "Website Developer", name: "Emily Jing" },
    ],
  },
  {
    department: "Finance",
    members: [
      { role: "Finance Officer", name: "Navya Shrivastava" },
      { role: "Finance Officer", name: "Tiffany Xu" },
    ],
  },
];
