import { getArticleData } from "@/src/lib/articles";
import { detectRequestLocaleFromAcceptLanguage, t } from "@/src/lib/i18n";
import { Article } from "../../../components/article";
import { headers } from "next/headers";

function Tag({ tag }: { tag: string }) {
  return (
    <div className="flex size-4 w-fit items-center justify-center rounded-full px-2 py-3 text-xs ring-1 ring-zinc-400 dark:ring-1 dark:ring-zinc-500">
      #{tag}
    </div>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const locale = detectRequestLocaleFromAcceptLanguage(
    headers().get("accept-language"),
  );
  const dict = t(locale);

  let articleData;
  try {
    articleData = await getArticleData(params.slug);
  } catch (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-16">
        <h1 className="text-5xl max-sm:text-3xl">
          {dict.article.notFoundTitle}
        </h1>
        <a
          href="/articles"
          className="underline decoration-sky-500 underline-offset-4 dark:decoration-sky-600"
        >
          {dict.article.notFoundCta}
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center p-8">
        <div className="text-sm text-zinc-500 max-sm:text-xs dark:text-zinc-400">
          {articleData.date} {"//"} {articleData.location}
        </div>
        <div className="flex w-full max-w-prose flex-col items-center justify-center gap-4 px-4 pb-6 pt-1">
          <h1 className="text-center text-5xl leading-tight max-sm:text-3xl">
            {articleData.title}
          </h1>
          <div className="flex flex-wrap gap-x-3">
            {articleData.tags.map((tag: string) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
      </div>
      <Article html={articleData.contentHtml} />
    </>
  );
}
