import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Menu",
      items: [
        {
          title: "Uang Saku Santri",
          href: "/aplikasi-uang-saku-santri",
          description: "Aplikasi uang saku santri. Pencatatan dan management uang saku santri",
        },
        {
          title: "Setor Hafalan Santri",
          href: "/aplikasi-setor-hafalan-santri",
          description: "Informasi hafalan santri. Juz dan ayat",
        },
        {
          title: "Koperasi Ponpes",
          href: "/aplikasi-koperasi-ponpes",
          description: "Informasi kegiatan dan aktifitas santri.",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Bantuan",
      items: [
        {
          title: "Dokumentasi",
          href: "/docs/getting-started",
          description: "Dokumentasi untuk pengoprasian aplikasi Satri-MU.",
        },
        {
          title: "Blog",
          href: "/blog",
          description:
            "Blog dan artikel seputar santri dan pondok pesantren",
        },
        // {
        //   title: "Authentification",
        //   href: "/login",
        //   description: "Login and register pages for authentification.",
        //   disabled: true,
        // },
        // {
        //   title: "Dashboard",
        //   href: "/#dashboard",
        //   description: "A dashboard panel after authentification.",
        //   disabled: true,
        // },
        // {
        //   title: "Ecommerce",
        //   href: "/#examples/ecommerce",
        //   description:
        //     "Different pages of an ecommerce app fetching data from an API.",
        //   disabled: true,
        // },
        // {
        //   title: "Social Media",
        //   href: "/#examples/social-media",
        //   description: "Different components & pages of an social media app.",
        //   disabled: true,
        // },
      ],
    },
  ],
  links: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Donasi",
      href: "/donasi",
    },
    {
      title: "Kontak",
      href: "/kontak",
    },
  ],
};
