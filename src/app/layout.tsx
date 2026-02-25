import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Script from "next/script";
import dynamic from "next/dynamic";
import { I18nProvider } from "../components/i18n-provider";
import { Footer } from "../components/footer";
// import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Gustavo Souza",
  description: "Gustavo's personal website",
};

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

// https://www.reddit.com/r/nextjs/comments/1bhfikg/comment/kxwj9ou/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                  if (theme === 'dark' || (!theme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${karla.className} min-h-full px-6`}>
        <I18nProvider>
          {/*<Analytics />*/}
          <Header />
          <main className="mx-auto max-w-prose pb-4">
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
