"use client";

import { useI18n } from "../../components/i18n-provider";

function AboutBodyEn() {
  return (
    <>
      <p>
        I&apos;m a <strong>Computer Science student</strong> based in Brazil,
        currently in my 1st year of college, balancing academic studies with a
        focus on <strong>web development (Node.js and React)</strong> and{" "}
        <strong>game development (Unity)</strong>.
      </p>
      <br />
      <p>
        My journey with technology started with simple HTML projects{" "}
        <em>(and Minecraft Servers)</em> when I was around 10 years old. Things
        got serious when I was around 13 and discovered{" "}
        <a href="https://youtu.be/S9uPNppGsGo">
          Python through Gustavo Guanabara&apos;s Curso em Vídeo YouTube channel
        </a>
        .
      </p>
      <br />
      <p>
        Since then, I have intermittently studied programming and technology in
        general, and now I&apos;m dedicated to turning this lifelong passion
        into a career. Currently, I&apos;ve been working on{" "}
        <strong>
          <a href="https://github.com/guslwl/fini">fini</a>
        </strong>{" "}
        (my 2 cents on how finance apps should be) and a{" "}
        <em>super mysterious</em> game, yet to be announced.
      </p>

      <p className="mt-6 italic">Smile, you&apos;re alive :)</p>

      <p className="font-bold">
        Best,
        <br />
        Gustavo
      </p>
    </>
  );
}

function AboutBodyPtBr() {
  return (
    <>
      <p>
        Atualmente estou no 1&ordm; ano de <strong>Ciência da Computação</strong>,
        equilibrando os estudos acadêmicos, {" "}
       de <strong>desenvolvimento web (Node.js e React)</strong> e também sobre{" "}
        <strong>desenvolvimento de jogos (Unity)</strong>.
      </p>
      <br />
      <p>
        Minha jornada com tecnologia começou com projetos simples de HTML{" "}
        <em>(e Servidores de Minecraft)</em> quando eu tinha cerca de 10 anos.
        Porém, só fui tomar mais contato com programação por volta dos 13,
        quando descobri o{" "}
        <a href="https://youtu.be/S9uPNppGsGo">
          Python pelo canal &quot;Curso em Vídeo&quot;, do Gustavo Guanabara
        </a>
        .
      </p>
      <br />
      <p>
        Desde então, estudei programação e tecnologia de forma intermitente e,
        agora, estou dedicado a transformar essa paixão de vida em carreira.
        Atualmente, venho trabalhando no{" "}
        <strong>
          <a href="https://github.com/guslwl/fini">fini</a>
        </strong>{" "}
        (meus 2 centavos sobre como aplicativos de finanças deveriam ser) e em
        um jogo <em>super misterioso</em>, ainda a ser anunciado.
      </p>

      <p className="mt-6 italic">Sorria, você está vivo :)</p>

      <p className="font-bold">
        Abraços,
        <br />
        Gustavo
      </p>
    </>
  );
}

export default function AboutPage() {
  const { locale, dict } = useI18n();

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {dict.about.title}
      </h1>
      <article>
        {locale === "pt-BR" ? <AboutBodyPtBr /> : <AboutBodyEn />}
      </article>
    </>
  );
}
