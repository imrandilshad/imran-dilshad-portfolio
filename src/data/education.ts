import type { Certification, Education } from "@/types/portfolio";

export const education: Education[] = [
  {
    degree: "BS Information Technology",
    institution: "University of the Punjab, Lahore",
    period: "2015 – 2019",
    result: "CGPA 3.46",
  },
  {
    degree: "Intermediate (ICS – Physics)",
    institution: "Govt. Islamia College Civil Lines, Lahore",
    period: "2013 – 2015",
    result: "79%",
  },
  {
    degree: "Matriculation (Science)",
    institution: "RGS School, Lahore",
    period: "2011 – 2013",
    result: "73%",
  },
];

export const certifications: Certification[] = [
  { title: "Web Development", issuer: "DigiSkills", date: "Apr 2019" },
  { title: "MS Word, PowerPoint & Excel", issuer: "DigiSkills", date: "2018" },
];
