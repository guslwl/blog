export default function AboutPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        About me
      </h1>
      <article>
        <p>
          {" "}
          I really need to write an about me. I may have a thing or two to say.
        </p>
        <p>
          While this doesn&apos;t happen feel free to send me a DM on{" "}
          <a href="https://x.com/guslwl">X</a> or an email{" "}
          <a href="mailto:me@guslwl.dev">me@guslwl.dev</a>.
        </p>
        <p>Smile, you&apos;re alive :)</p>
        <p>
          Best,
          <br />
          Gustavo
        </p>
      </article>
    </>
  );
}
