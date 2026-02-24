export default function AboutPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <article>
        <p>
          I&apos;m a <strong>Computer Science student</strong> based in Brazil,
          currently in my 1st year of college, balancing academic studies with a
          focus on <strong>web development (Node.js and React)</strong> and{" "}
          <strong>game development (Unity)</strong>.
        </p>
        <br />
        <p>
          My journey with technology started with simple HTML projects{" "}
          <em>(and Minecraft Servers)</em> when I was around 10 years old.
          Things got serious when I was around 13 and discovered{" "}
          <a href="https://youtu.be/S9uPNppGsGo">
            Python through Gustavo Guanabara&apos;s Curso em Vídeo YouTube
            channel
          </a>
          .
        </p>
        <br />
        <p>
          Since then, I have intermittently studied programming and technology
          in general, and now I’m dedicated to turning this lifelong passion
          into a career. Currently, I&apos;ve been working on{" "}
          <strong>
            <a href="https://github.com/guslwl/fini">fini</a>
          </strong>{" "}
          (my 2 cents on how we should deal with our finances) and a{" "}
          <em>super mysterious</em> game, yet to be announced.
        </p>

        <p className="mt-6 italic">Smile, you&apos;re alive :)</p>

        <p className="font-bold">
          Best,
          <br />
          Gustavo
        </p>
      </article>
    </>
  );
}
