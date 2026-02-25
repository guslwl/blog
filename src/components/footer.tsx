"use client";

import Link from "next/link";
import { useI18n } from "./i18n-provider";

export function Footer() {
  const { dict } = useI18n();

  return (
    <footer className="mx-auto flex max-w-prose flex-col items-center gap-2 py-6 text-sm text-zinc-500 max-sm:items-start dark:text-zinc-400">
      <div className="flex items-center gap-4">
        <a
          className="decoration-zinc-500 underline-offset-4 transition-transform sm:hover:underline dark:decoration-zinc-400"
          href="https://github.com/guslwl/blog"
          target="_blank"
        >
          Code
        </a>
        <Link
          className="decoration-zinc-500 underline-offset-4 transition-transform sm:hover:underline dark:decoration-zinc-400"
          target="_blank"
          href="/rss.xml"
        >
          RSS Feed
        </Link>
        <a
          className="decoration-zinc-500 underline-offset-4 transition-transform sm:hover:underline dark:decoration-zinc-400"
          href="https://x.com/guslwl"
          target="_blank"
        >
          @guslwl
        </a>
      </div>
      <blockquote className="text-zinc-800 dark:text-zinc-300">
        {dict.footer.quote}
      </blockquote>
    </footer>
  );
}
