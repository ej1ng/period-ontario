export type TeamMember = {
  name: string;
  role: string;
  imageSrc?: string;
};

export const leadership: TeamMember[] = [
  { role: "President", name: "Mehrava Afshani" },
  { role: "Vice-President", name: "Valerie Tso" },
];

export const departmentHeads: TeamMember[] = [
  { role: "Head of Advocacy", name: "Adele Feng" },
  { role: "Head of Service", name: "Suhani Desai" },
  { role: "Head of Education", name: "Catherine Li" },
  { role: "Head of Communications", name: "Ava Fong" },
  { role: "Head of Finance", name: "Megan Cui" },
];
