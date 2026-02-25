export type Locale = "en" | "pt-BR";

export const DEFAULT_LOCALE: Locale = "en";

export function normalizeLocale(input?: string | null): Locale {
  if (!input) return DEFAULT_LOCALE;

  const normalized = input.toLowerCase();
  if (normalized === "pt-br" || normalized === "pt") {
    return "pt-BR";
  }

  return "en";
}

export function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  return normalizeLocale(window.navigator.language);
}

export function detectRequestLocaleFromAcceptLanguage(
  acceptLanguage?: string | null,
): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  return normalizeLocale(acceptLanguage.split(",")[0]);
}

type Dictionary = {
  header: {
    role: string;
    backToHomeAria: string;
    viewProjectsAria: string;
    viewArticlesAria: string;
    viewAboutAria: string;
    toggleThemeAria: string;
    toggleLanguageAria: string;
  };
  nav: {
    projects: string;
    articles: string;
    about: string;
  };
  home: {
    online: string;
    downloadCv: string;
    links: {
      linkedinDescription: string;
      githubDescription: string;
    };
  };
  about: {
    title: string;
  };
  projects: {
    title: string;
    visitWebsite: string;
    viewCode: string;
    items: {
      cloneTabnewsDescription: string;
      finiDescription: string;
    };
  };
  articles: {
    title: string;
  };
  article: {
    notFoundTitle: string;
    notFoundCta: string;
  };
  notFound: {
    title: string;
    cta: string;
  };
  footer: {
    quote: string;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    header: {
      role: "Software Developer",
      backToHomeAria: "Back to home",
      viewProjectsAria: "View projects",
      viewArticlesAria: "View articles",
      viewAboutAria: "View about page",
      toggleThemeAria: "Toggle theme",
      toggleLanguageAria: "Toggle language",
    },
    nav: {
      projects: "/projects",
      articles: "/articles",
      about: "/about",
    },
    home: {
      online: "Online",
      downloadCv: "Download my CV",
      links: {
        linkedinDescription: "follow my career",
        githubDescription: "steal my code",
      },
    },
    about: {
      title: "About me",
    },
    projects: {
      title: "Projects",
      visitWebsite: "Visit website",
      viewCode: "View code",
      items: {
        cloneTabnewsDescription:
          "A clone of `tabnews.com.br` website, developed during the curso.dev course",
        finiDescription:
          "A finance app that respects your privacy and is designed for normal people.",
      },
    },
    articles: {
      title: "Articles",
    },
    article: {
      notFoundTitle: "This article doesn't exist.",
      notFoundCta: "Read something else",
    },
    notFound: {
      title: "This page doesn't exist.",
      cta: "Take me home, country road...",
    },
    footer: {
      quote: "Smile, you're alive :)",
    },
  },
  "pt-BR": {
    header: {
      role: "Desenvolvedor de Software",
      backToHomeAria: "Voltar para a home",
      viewProjectsAria: "Ver projetos",
      viewArticlesAria: "Ver artigos",
      viewAboutAria: "Ver página sobre",
      toggleThemeAria: "Alternar tema",
      toggleLanguageAria: "Alternar idioma",
    },
    nav: {
      projects: "/projects",
      articles: "/articles",
      about: "/about",
    },
    home: {
      online: "Online",
      downloadCv: "Baixe meu currículo",
      links: {
        linkedinDescription: "acompanhe minha carreira",
        githubDescription: "roube meu código",
      },
    },
    about: {
      title: "Sobre mim",
    },
    projects: {
      title: "Projetos",
      visitWebsite: "Visitar site",
      viewCode: "Ver código",
      items: {
        cloneTabnewsDescription:
          "Um clone do site `tabnews.com.br`, desenvolvido durante o curso curso.dev",
        finiDescription:
          "Um app financeiro que respeita sua privacidade e foi feito para pessoas normais.",
      },
    },
    articles: {
      title: "Artigos",
    },
    article: {
      notFoundTitle: "Este artigo não existe.",
      notFoundCta: "Ler outra coisa",
    },
    notFound: {
      title: "Esta página não existe.",
      cta: "Voltar para a home",
    },
    footer: {
      quote: "Sorria, você está aqui :)",
    },
  },
};

export function t(locale: Locale) {
  return dictionary[locale];
}
