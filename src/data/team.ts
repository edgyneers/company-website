// Team members, in display order. Photos live in src/assets/team (1080×1350, 4:5)
// so Astro can resize and convert them to WebP at build time.
import type { ImageMetadata } from "astro";
import faiz from "../assets/team/wastara-team-faiz.png";
import fathan from "../assets/team/wastara-team-fathan.png";
import muthi from "../assets/team/wastara-team-muthi.png";
import neena from "../assets/team/wastara-team-neena.png";
import risan from "../assets/team/wastara-team-risan.png";
import tasya from "../assets/team/wastara-team-tasya.png";

export interface Member {
  name: string;
  role: { en: string; id: string };
  photo: ImageMetadata;
  linkedin: string;
  website?: string; // optional: leave out if they don't have one
}

export const team: Member[] = [
  {
    name: "Muhammad Fairuz Ismayana",
    role: { en: "Project Manager", id: "Project Manager" },
    photo: faiz,
    linkedin: "https://www.linkedin.com/in/muhammadfairuzismayana/",
  },
  {
    name: "Muthiara Putri Aliyu",
    role: { en: "Product Designer", id: "Product Designer" },
    photo: muthi,
    linkedin: "https://www.linkedin.com/in/muthiaraputrialiyu/",
  },
  {
    name: "Maulidya Ayu Ardiena",
    role: { en: "UI/UX Designer", id: "UI/UX Designer" },
    photo: neena,
    linkedin: "https://www.linkedin.com/in/ardiena/",
  },
  {
    name: "Fathan Naufal Adhitama",
    role: { en: "IoT Developer", id: "IoT Developer" },
    photo: fathan,
    linkedin: "https://www.linkedin.com/in/fathanadhitama/",
    website: "https://fathanadhitama.dev/",
  },
  {
    name: "Risanto Mulyo",
    role: { en: "Tech Developer", id: "Tech Developer" },
    photo: risan,
    linkedin: "https://www.linkedin.com/in/risantomulyo/",
    website: "https://risanto.vercel.app/",
  },
  {
    name: "Tasya Pandya Latifa",
    role: { en: "Tech Developer", id: "Tech Developer" },
    photo: tasya,
    linkedin: "https://www.linkedin.com/in/tasyapandya/",
  },
];
