import { detectRequestLocaleFromAcceptLanguage, t } from "@/src/lib/i18n";
import { headers } from "next/headers";

export default function NotFound() {
  const locale = detectRequestLocaleFromAcceptLanguage(
    headers().get("accept-language"),
  );
  const dict = t(locale);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16">
      <h1 className="text-5xl max-sm:text-3xl">{dict.notFound.title}</h1>
      <a
        href="/"
        className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
      >
        {dict.notFound.cta}
      </a>
    </div>
  );
}
