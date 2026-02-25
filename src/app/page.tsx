"use client";

import {
  SiGithub,
  SiLinkedin,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Download, Send } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { useI18n } from "../components/i18n-provider";

const XLogo = () => {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="ml-1">
      <g>
        <path
          className="fill-zinc-950 dark:fill-zinc-200"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  );
};

interface Link {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
}

function HomeIntroEn() {
  return (
    <p className="text-sm">
      Hello there! <br />
      <br /> I&apos;m a <strong>Computer Science student</strong> by day and an
      aspiring <strong>game dev</strong> by night. I&apos;m currently
      sharpening my Full Stack skills by building fini, a personal finance app,
      while also working toward my ultimate goal: living off my own indie games.
    </p>
  );
}

function HomeIntroPtBr() {
  return (
    <p className="text-sm">
  Hello there! <br />
  <br /> Sou <strong>estudante de Ciência da Computação</strong> durante o dia e
  aspirante a <strong>game dev</strong> à noite. Atualmente, estou polindo minhas
  habilidades Full Stack desenvolvendo o fini, um app de finanças pessoais,
  enquanto também trabalho em direção ao meu objetivo final: viver dos meus próprios jogos indie.
</p>
  );
}

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="text-zinc-500 opacity-0 transition-transform max-sm:hidden sm:group-hover:opacity-100 dark:text-zinc-400">
          {link.description}
        </span>
      </span>
      <ArrowUpRight
        strokeWidth={1.4}
        className="size-5 shrink-0 text-zinc-800 transition-transform sm:group-hover:rotate-45 dark:text-zinc-200"
      />
    </a>
  );
};

export default function HomePage() {
  const { dict, locale } = useI18n();
  const externalLinks: Link[] = [
    {
      name: "LinkedIn",
      description: dict.home.links.linkedinDescription,
      url: "https://linkedin.com/in/guslwl",
      icon: <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-200" />,
    },
    {
      name: "GitHub",
      description: dict.home.links.githubDescription,
      url: "https://github.com/guslwl",
      icon: <SiGithub />,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {locale === "pt-BR" ? <HomeIntroPtBr /> : <HomeIntroEn />}
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinks.map((link: Link) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </div>
      <div className="flex justify-center gap-6 max-sm:flex-col-reverse sm:justify-between">
        <div className="flex flex-col justify-center gap-4 max-sm:items-center">
          <div className="group -m-8 flex select-all items-center gap-3 p-8 transition-transform">
            me@guslwl.dev
            <div className="inline-flex items-center gap-3">
              {/* TODO add copy email
                <button className="text-zinc-800 sm:group-hover:inline-flex dark:text-zinc-200">
                <Copy className="size-4" />
              </button> */}
              <a
                href="mailto:me@guslwl.dev"
                className="text-zinc-800 dark:text-zinc-200"
              >
                <Send strokeWidth={1.4} className="size-4" />
              </a>
            </div>
          </div>
          <span className="-mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-600 ring-1 ring-green-500 dark:bg-transparent dark:text-emerald-500 dark:ring-emerald-500">
            <div className="size-2 animate-pulse rounded-full bg-green-500 dark:bg-emerald-500" />
            {dict.home.online}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="/gustavo-cv-en.pdf"
            download="Gustavo-CV-en.pdf"
            className="flex flex-row items-center justify-center gap-3 rounded bg-sky-300 p-4 text-sky-800 ring-1 ring-sky-500 transition-transform sm:hover:bg-sky-400 dark:bg-inherit dark:text-sky-500 dark:ring-sky-500 sm:sm:dark:hover:bg-zinc-800"
          >
            <span className="text-nowrap">{dict.home.downloadCv}</span>
            <Download strokeWidth={1.4} className="size-5 max-sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
}
