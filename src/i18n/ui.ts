// All page copy, per language. Keep the keys identical in both.
export const languages = { id: "ID", en: "EN" } as const;
export type Lang = keyof typeof languages;

const en = {
  meta: {
    journeyTitle: "The Martonun Journey — Wastara Studio",
    worksTitle: "Wastara Studio — Works",
    aboutTitle: "About — Wastara Studio",
    description:
      "Wastara Studio builds interactive experiences that let people touch, play with and carry home Indonesia’s cultural heritage.",
  },
  nav: {
    works: "Works",
    about: "About",
    language: "Language",
    main: "Main",
    menu: "Menu",
  },
  tagline: { a: "exploring", b: "heritage", c: "through", d: "innovation" },
  footer: { contact: "Contact" },

  works: {
    filmEyebrow: "Latest work",
    filmMeta: "Martonun · 2026",
    filmPlay: "Play the Martonun video",
    filmTitle: ["Weaving an ulos,", "from hand to hand."],
    watchYoutube: "Watch on YouTube ↗",
    introLabel: "Wastara Studio",
    intro:
      "We build interactive experiences that let people touch, play with and carry home Indonesia’s cultural heritage.",
    heading: "Works",
    featured: "Featured",
    type: "Interactive installation",
    meaning: "Batak for “to weave”",
    body: "A museum installation where visitors weave their own ulos — the Batak ceremonial cloth — on a gedogan, the traditional loom. A physical console stands in for the loom: lift the handle, move the slider, and an iPad guides every pass. Each finished cloth joins the ulos projected onto white fabric, from one visitor to the next.",
    steps: [
      "Start the game",
      "Move the console",
      "See your ulos on the cloth",
    ],
    builtWith: "Built with",
    builtWithValue:
      "iPadOS app · ESP32 console over Wi-Fi · Projection mapping on fabric",
    shownAt: "Shown at",
    shownAtValue: "Museum Tekstil Jakarta (Jan - Mar 2027)",
    watchFilm: "Watch the video ↗",
    caseStudy: "See the journey →",
    illoAlt:
      "The Martonun console at the exhibition: a controller shaped like a traditional loom, with a movable slider, and the iPad weaving guide behind it",
    nextEyebrow: "Next on the loom",
    nextTitle: "Next project — coming soon",
    meet: "Meet the studio →",
  },

  journey: {
    titleA: "The journey of",
    lead: "From our first meeting to the final concept playtest at Museum Tekstil: how Martonun took shape with the museum, its curators and the weavers.",
    back: "← Back to Works",
    translatedNote: "Quotes translated from Indonesian.",
  },

  about: {
    heading: "About",
    lead: [
      "Wastara is a technology-driven creative studio exploring Indonesian culture through a blend of design, technology and storytelling.",
      "We weave cultural heritage back into experiences that can be touched, explored and understood from a fresh perspective.",
    ],
    storyLabel: "Our story",
    storyTitle: "Born at the Apple Developer Academy @ BINUS.",
    story: [
      "Wastara Studio started as a team in the Academy’s final challenge: 49 days to build something within the Apple ecosystem. We chose to bring a museum visit to life, and built Martonun — an installation where visitors weave their own ulos on a gedogan loom.",
      // "[The meaning behind the name “Wastara”, and where the studio is heading next.]",
    ],
    howTitle: "How we work",
    how: [
      {
        title: "Heritage first",
        body: "We start from the object and its story — the loom, the cloth, the motif — and design the technology around it.",
      },
      {
        title: "Made to be touched",
        body: "Physical consoles, motion and projection, so visitors learn with their hands, not just their eyes.",
      },
      {
        title: "Built with museums",
        body: "We work alongside museums and cultural spaces, fitting into their rooms, collections and visitors.",
      },
    ],
    teamTitle: "Team",
    website: "Website",
    ctaTitle: "Have a collection with a story to tell?",
    ctaBody:
      "We’d love to hear from museums, galleries and cultural communities.",
    ctaButton: "Get in touch →",
  },
};

const id: typeof en = {
  meta: {
    journeyTitle: "Perjalanan Martonun — Wastara Studio",
    worksTitle: "Wastara Studio — Karya",
    aboutTitle: "Tentang — Wastara Studio",
    description:
      "Wastara Studio membuat pengalaman interaktif yang mengajak orang menyentuh, memainkan, dan membawa pulang warisan budaya Indonesia.",
  },
  nav: {
    works: "Karya",
    about: "Tentang",
    language: "Bahasa",
    main: "Utama",
    menu: "Menu",
  },
  tagline: {
    a: "menjelajahi",
    b: "warisan budaya",
    c: "melalui",
    d: "inovasi",
  },
  footer: { contact: "Kontak" },

  works: {
    filmEyebrow: "Karya terbaru",
    filmMeta: "Martonun · 2026",
    filmPlay: "Putar video Martonun",
    filmTitle: ["Menenun ulos,", "dari tangan ke tangan."],
    watchYoutube: "Tonton di YouTube ↗",
    introLabel: "Wastara Studio",
    intro:
      "Kami membuat pengalaman interaktif yang mengajak orang menyentuh, memainkan, dan membawa pulang warisan budaya Indonesia.",
    heading: "Karya",
    featured: "Sorotan",
    type: "Instalasi interaktif",
    meaning: "Bahasa Batak untuk “menenun”",
    body: "Instalasi museum tempat pengunjung menenun ulos — kain adat Batak — mereka sendiri di atas gedogan, alat tenun tradisional. Sebuah konsol fisik menggantikan alat tenunnya: angkat handle, geser slider, dan iPad memandu setiap langkah. Setiap kain yang selesai menyambung ke ulos yang diproyeksikan ke kain putih, dari satu pengunjung ke pengunjung berikutnya.",
    steps: ["Mulai permainan", "Gerakkan konsol", "Lihat ulosmu di kain"],
    builtWith: "Dibuat dengan",
    builtWithValue:
      "Aplikasi iPadOS · Konsol ESP32 via Wi-Fi · Projection mapping di kain",
    shownAt: "Dipamerkan di",
    shownAtValue: "Museum Tekstil Jakarta (Jan - Mar 2027)",
    watchFilm: "Tonton video ↗",
    caseStudy: "Lihat perjalanannya →",
    illoAlt:
      "Konsol Martonun di pameran: pengendali berbentuk alat tenun tradisional dengan slider yang bisa digeser, dan iPad pemandu menenun di belakangnya",
    nextEyebrow: "Berikutnya di alat tenun",
    nextTitle: "Karya berikutnya — segera hadir",
    meet: "Kenali studio kami →",
  },

  journey: {
    titleA: "Perjalanan",
    lead: "Dari pertemuan pertama hingga uji coba konsep akhir di Museum Tekstil: bagaimana Martonun terbentuk bersama museum, kurator, dan para penenun.",
    back: "← Kembali ke Karya",
    translatedNote: "",
  },

  about: {
    heading: "Tentang",
    lead: [
      "Wastara adalah studio kreatif berbasis teknologi yang mengeksplorasi budaya Indonesia melalui perpaduan desain, teknologi, dan cerita.",
      "Merangkai kembali warisan budaya ke dalam pengalaman yang dapat disentuh, dijelajahi, dan dimaknai melalui perspektif baru.",
    ],
    storyLabel: "Cerita kami",
    storyTitle: "Lahir di Apple Developer Academy @ BINUS.",
    story: [
      "Wastara Studio bermula sebagai tim di final challenge Academy: 49 hari untuk membuat sesuatu di ekosistem Apple. Kami memilih menghidupkan kunjungan ke museum, dan membuat Martonun — instalasi tempat pengunjung menenun ulos mereka sendiri di alat tenun gedogan.",
      // "[Makna di balik nama “Wastara”, dan ke mana studio ini melangkah berikutnya.]",
    ],
    howTitle: "Cara kami bekerja",
    how: [
      {
        title: "Warisan budaya dulu",
        body: "Kami mulai dari benda dan ceritanya — alat tenun, kain, motif — lalu merancang teknologinya di sekitar itu.",
      },
      {
        title: "Dibuat untuk disentuh",
        body: "Konsol fisik, gerakan, dan proyeksi, supaya pengunjung belajar dengan tangan, bukan hanya mata.",
      },
      {
        title: "Bersama museum",
        body: "Kami bekerja berdampingan dengan museum dan ruang budaya, menyesuaikan dengan ruang, koleksi, dan pengunjungnya.",
      },
    ],
    teamTitle: "Tim",
    website: "Situs web",
    ctaTitle: "Punya koleksi dengan cerita untuk dibagikan?",
    ctaBody: "Kami senang mendengar dari museum, galeri, dan komunitas budaya.",
    ctaButton: "Hubungi kami →",
  },
};

export const ui = { en, id };

export function t(lang: Lang) {
  return ui[lang];
}

/** Path of the same page in the given language. */
export type PageKey = "" | "about" | "works/martonun";

export function localePath(lang: Lang, page: PageKey) {
  const prefix = lang === "id" ? "" : `/${lang}`;
  return `${prefix}/${page}${page ? "/" : ""}`.replace(/\/+/g, "/") || "/";
}
