// All page copy, per language. Keep the keys identical in both.
export const languages = { en: 'EN', id: 'ID' } as const;
export type Lang = keyof typeof languages;

const en = {
  meta: {
    projectsTitle: 'Wastara Studio — Projects',
    aboutTitle: 'About — Wastara Studio',
    description:
      'Wastara Studio builds interactive experiences that let people touch, play with and carry home Indonesia’s cultural heritage.',
  },
  nav: { projects: 'Projects', about: 'About', language: 'Language', main: 'Main' },
  tagline: { a: 'exploring', b: 'heritage', c: 'through', d: 'innovation' },
  footer: { contact: 'Contact' },

  projects: {
    filmEyebrow: 'Featured film',
    filmMeta: 'Martonun · 2026',
    filmPlay: 'Play the Martonun film',
    filmTitle: ['Weaving an ulos,', 'one visitor at a time.'],
    watchYoutube: 'Watch on YouTube ↗',
    introLabel: 'Wastara Studio',
    intro:
      'We build interactive experiences that let people touch, play with and carry home Indonesia’s cultural heritage — in museums, galleries and public spaces.',
    heading: 'Projects',
    featured: 'Featured',
    type: 'Interactive installation',
    meaning: 'Batak for “to weave”',
    body:
      'A museum installation where visitors weave their own ulos, the Batak ceremonial cloth, on a gedogan — the traditional backstrap loom. A physical console stands in for the loom: lift the handle, slide the turak, and an iPad guides every pass. Each finished cloth joins a growing length of ulos projected onto white fabric, one visitor after another.',
    steps: ['Pick a colour', 'Weave on the console', 'See your ulos on the cloth'],
    builtWith: 'Built with',
    builtWithValue: 'iPadOS app · ESP32 console over BLE · Projection on fabric',
    shownAt: 'Shown at',
    shownAtValue: '[Museum / venue]',
    watchFilm: 'Watch the film ↗',
    caseStudy: 'Read the case study',
    illoAlt: 'Illustration of a gedogan loom shaped like a gunungan, with a tree of threads',
    nextEyebrow: 'Next on the loom',
    nextTitle: '[Next project — coming soon]',
    meet: 'Meet the studio →',
  },

  about: {
    heading: 'About',
    lead:
      'We’re a small studio from Indonesia making heritage something you can hold, move and play — not just look at behind glass.',
    storyLabel: 'Our story',
    storyTitle: 'Born at the Apple Developer Academy @ BINUS.',
    story: [
      'Wastara Studio started as a team in the Academy’s final challenge: 49 days to build something within the Apple ecosystem. We chose to bring a museum visit to life, and built Martonun — an installation where visitors weave their own ulos on a gedogan loom.',
      '[The meaning behind the name “Wastara”, and where the studio is heading next.]',
    ],
    howTitle: 'How we work',
    how: [
      { title: 'Heritage first', body: 'We start from the object and its story — the loom, the cloth, the motif — and design the technology around it.' },
      { title: 'Made to be touched', body: 'Physical consoles, motion and projection, so visitors learn with their hands, not just their eyes.' },
      { title: 'Built with museums', body: 'We work alongside museums and cultural spaces, fitting into their rooms, collections and visitors.' },
    ],
    teamTitle: 'Team',
    website: 'Website',
    ctaTitle: 'Have a collection with a story to tell?',
    ctaBody: 'We’d love to hear from museums, galleries and cultural communities.',
    ctaButton: 'Get in touch →',
  },
};

const id: typeof en = {
  meta: {
    projectsTitle: 'Wastara Studio — Proyek',
    aboutTitle: 'Tentang — Wastara Studio',
    description:
      'Wastara Studio membuat pengalaman interaktif yang mengajak orang menyentuh, memainkan, dan membawa pulang warisan budaya Indonesia.',
  },
  nav: { projects: 'Proyek', about: 'Tentang', language: 'Bahasa', main: 'Utama' },
  tagline: { a: 'menjelajahi', b: 'warisan', c: 'lewat', d: 'inovasi' },
  footer: { contact: 'Kontak' },

  projects: {
    filmEyebrow: 'Film unggulan',
    filmMeta: 'Martonun · 2026',
    filmPlay: 'Putar film Martonun',
    filmTitle: ['Menenun ulos,', 'satu pengunjung demi satu.'],
    watchYoutube: 'Tonton di YouTube ↗',
    introLabel: 'Wastara Studio',
    intro:
      'Kami membuat pengalaman interaktif yang mengajak orang menyentuh, memainkan, dan membawa pulang warisan budaya Indonesia — di museum, galeri, dan ruang publik.',
    heading: 'Proyek',
    featured: 'Unggulan',
    type: 'Instalasi interaktif',
    meaning: 'Bahasa Batak untuk “menenun”',
    body:
      'Instalasi museum tempat pengunjung menenun ulos mereka sendiri — kain adat Batak — di atas gedogan, alat tenun gendong tradisional. Sebuah konsol fisik menggantikan alat tenunnya: angkat handle, geser turak, dan iPad memandu setiap langkah. Setiap kain yang selesai menyambung ke bentangan ulos yang diproyeksikan ke kain putih, dari satu pengunjung ke pengunjung berikutnya.',
    steps: ['Pilih warna', 'Tenun di konsol', 'Lihat ulosmu di kain'],
    builtWith: 'Dibuat dengan',
    builtWithValue: 'Aplikasi iPadOS · Konsol ESP32 via BLE · Proyeksi di kain',
    shownAt: 'Dipamerkan di',
    shownAtValue: '[Museum / tempat]',
    watchFilm: 'Tonton filmnya ↗',
    caseStudy: 'Baca studi kasus',
    illoAlt: 'Ilustrasi alat tenun gedogan berbentuk gunungan dengan pohon benang',
    nextEyebrow: 'Berikutnya di alat tenun',
    nextTitle: '[Proyek berikutnya — segera hadir]',
    meet: 'Kenali studio kami →',
  },

  about: {
    heading: 'Tentang',
    lead:
      'Kami studio kecil dari Indonesia yang ingin warisan budaya bisa dipegang, digerakkan, dan dimainkan — bukan hanya dilihat dari balik kaca.',
    storyLabel: 'Cerita kami',
    storyTitle: 'Lahir di Apple Developer Academy @ BINUS.',
    story: [
      'Wastara Studio bermula sebagai tim di final challenge Academy: 49 hari untuk membuat sesuatu di ekosistem Apple. Kami memilih menghidupkan kunjungan ke museum, dan membuat Martonun — instalasi tempat pengunjung menenun ulos mereka sendiri di alat tenun gedogan.',
      '[Makna di balik nama “Wastara”, dan ke mana studio ini melangkah berikutnya.]',
    ],
    howTitle: 'Cara kami bekerja',
    how: [
      { title: 'Warisan budaya dulu', body: 'Kami mulai dari benda dan ceritanya — alat tenun, kain, motif — lalu merancang teknologinya di sekitar itu.' },
      { title: 'Dibuat untuk disentuh', body: 'Konsol fisik, gerakan, dan proyeksi, supaya pengunjung belajar dengan tangan, bukan hanya mata.' },
      { title: 'Bersama museum', body: 'Kami bekerja berdampingan dengan museum dan ruang budaya, menyesuaikan dengan ruang, koleksi, dan pengunjungnya.' },
    ],
    teamTitle: 'Tim',
    website: 'Situs web',
    ctaTitle: 'Punya koleksi dengan cerita untuk dibagikan?',
    ctaBody: 'Kami senang mendengar dari museum, galeri, dan komunitas budaya.',
    ctaButton: 'Hubungi kami →',
  },
};

export const ui = { en, id };

export function t(lang: Lang) {
  return ui[lang];
}

/** Path of the same page in the given language. */
export function localePath(lang: Lang, page: '' | 'about') {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return `${prefix}/${page}${page ? '/' : ''}`.replace(/\/+/g, '/') || '/';
}
