import Link from "next/link";
import React from "react";

export default {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Raven Bs",
      defaultTitle: "Raven Bs",
      description: "Raven B4, but for those who can't afford it. Raven B4, but not only for Hypixel.",
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://raven-bs.tejaslamba.xyz",
        site_name: "Raven Bs",
      },
      themeColor: "#2ac603",
    };
  },
  docsRepositoryBase: "https://github.com/TejasLamba2006/Raven-bS-Docs",
  head: (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/logo.webp" />
    </>
  ),
  logo: (
    <>
      <img
        src="/logo.webp"
        alt="logo"
        width="50"
        height="50"
      />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Raven Bs</span>
    </>
  ),
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
      }
    }
  },
  chat: {
    link: 'https://discord.gg/G4AH3kSYdR',
  },
  banner: {
    text: "Documentation is still in progress. Please join our Discord server for help.",
    key: "in-progress-new",
    dismissible: false

  },
  feedback: {
    content: null
  },
  editLink: {

  },
  primaryHue: 108,
  primarySaturation: 100,
  navigation: true,
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <Link href="https://github.com/TejasLamba2006" target="_blank" rel="noreferrer">
          TejasLamba2006
        </Link>
        .
      </span>
    ),
  },
};
