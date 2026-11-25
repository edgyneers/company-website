// "Perjalanan Martonun" — the project timeline, from the playtest poster.
// Photos live in src/assets/journey. They're cut from the poster video for now (small, ~200–330 px):
// replace each file with the original photo under the same name and nothing else needs changing.
// In quote text, **double asterisks** mark bold words.
import type { ImageMetadata } from 'astro';
import firstMeeting from '../assets/journey/01-first-meeting.jpg';
import consultFabrics from '../assets/journey/02-consult-fabrics.jpg';
import playtestLaptop from '../assets/journey/02-playtest-laptop.jpg';
import weavers from '../assets/journey/03-weavers.jpg';
import loom from '../assets/journey/03-loom.jpg';
import playtestA from '../assets/journey/04-playtest-a.jpg';
import playtestB from '../assets/journey/04-playtest-b.jpg';

type Text = { id: string; en: string };

export interface Quote {
  text: Text;
  name: string;
  role?: Text;
}

export interface Milestone {
  date: Text;
  title: Text;
  photos: { src: ImageMetadata; alt: Text }[];
  quotes: Quote[];
}

const ardi = {
  name: 'Ardi Hariyadi',
  role: {
    id: 'Kepala Koleksi, Informasi dan Edukasi Museum Tekstil',
    en: 'Head of Collections, Information and Education, Museum Tekstil',
  },
};
const zahwa = {
  name: 'Zahwa Nauli Siregar',
  role: { id: 'Kurator Junior Museum Tekstil', en: 'Junior Curator, Museum Tekstil' },
};
const ester = {
  name: 'Nur Ester Sihombing',
  role: { id: 'Kepala Penenun Bapak Torang Sitorus', en: 'Head Weaver for Bapak Torang Sitorus' },
};

export const journey: Milestone[] = [
  {
    date: { id: 'September 2026', en: 'September 2026' },
    title: { id: 'Titik Temu Pertama', en: 'First Meeting' },
    photos: [
      {
        src: firstMeeting,
        alt: {
          id: 'Tim Wastara bersama staf Museum Tekstil di ruang pertemuan',
          en: 'The Wastara team with Museum Tekstil staff in a meeting room',
        },
      },
    ],
    quotes: [
      {
        ...ardi,
        text: {
          id: 'Sepertinya menarik untuk kalian angkat **gerakan menenun**, Indonesia punya banyak jenis tenun dan masih **jarang ada digitalisasinya.**\n\nKami juga bakalan ada pameran tenun Ulos di bulan Januari, mungkin kalian bisa ikut serta.',
          en: 'It could be interesting for you to explore **the motion of weaving**. Indonesia has many kinds of weaving, and **very few have been digitised.**\n\nWe’ll also be holding an Ulos weaving exhibition in January; maybe you could take part.',
        },
      },
    ],
  },
  {
    date: { id: 'Oktober 2026', en: 'October 2026' },
    title: { id: 'Konsultasi dan Uji Coba 1', en: 'Consultation and First Playtest' },
    photos: [
      {
        src: consultFabrics,
        alt: {
          id: 'Melihat koleksi kain tenun di atas meja bersama kurator',
          en: 'Looking through woven cloths on a table with a curator',
        },
      },
      {
        src: playtestLaptop,
        alt: {
          id: 'Uji coba pertama di laptop',
          en: 'First playtest on a laptop',
        },
      },
    ],
    quotes: [
      {
        ...zahwa,
        text: {
          id: 'Mungkin lebih baik jika pengunjungnya bisa menyentuh sebuah alat agar pengalaman yang didapatkan bisa lebih imersif dan nyata.',
          en: 'It might be better if visitors could touch a physical tool, so the experience feels more immersive and real.',
        },
      },
    ],
  },
  {
    date: { id: 'November 2026', en: 'November 2026' },
    title: {
      id: 'Konsultasi ke Pak Torang Sitorus dan Tim',
      en: 'Consultation with Pak Torang Sitorus and Team',
    },
    photos: [
      {
        src: weavers,
        alt: {
          id: 'Foto bersama penenun dari tim Pak Torang Sitorus',
          en: 'With a weaver from Pak Torang Sitorus’s team',
        },
      },
      {
        src: loom,
        alt: {
          id: 'Penenun sedang bekerja di alat tenun',
          en: 'A weaver working at a loom',
        },
      },
    ],
    quotes: [
      {
        ...ester,
        text: {
          id: 'Konsepnya sudah bagus dan penamaan setiap gerakan maupun alatnya sudah benar, namun saya sarankan agar motif yang diambil adalah Ulos Kontemporer saja.',
          en: 'The concept is good, and the names of every movement and tool are correct, but I’d suggest using only Contemporary Ulos motifs.',
        },
      },
    ],
  },
  {
    date: { id: 'November 2026', en: 'November 2026' },
    title: {
      id: 'Uji Coba Konsep Akhir ke Museum Tekstil',
      en: 'Final Concept Playtest at Museum Tekstil',
    },
    photos: [
      {
        src: playtestA,
        alt: {
          id: 'Pengunjung mencoba Martonun di Museum Tekstil',
          en: 'A visitor trying Martonun at Museum Tekstil',
        },
      },
      {
        src: playtestB,
        alt: {
          id: 'Uji coba Martonun dengan layar proyeksi di belakang',
          en: 'Playtesting Martonun with the projection screen behind',
        },
      },
    ],
    quotes: [
      {
        name: ardi.name,
        text: {
          id: 'Not bad, experience-nya dapat, tapi mungkin alatnya bisa ditingkatkan sedikit lagi.',
          en: 'Not bad. The experience comes through, but the tool could be improved a little more.',
        },
      },
      {
        name: zahwa.name,
        text: {
          id: 'Wah keren sekali guys bisa buat seperti ini dalam waktu singkat, aku sendiri sudah nangkep apa yang mau disampaikan instalasinya.',
          en: 'Wow, it’s really cool that you made something like this in such a short time. I already get what the installation is trying to say.',
        },
      },
    ],
  },
];
