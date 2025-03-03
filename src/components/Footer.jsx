function Footer() {
  return (
    <footer className="text-center text-xl mt-8 py-4 bg-[var(--accent-color)]">
      <p className="">
        Source data obtained from{" "}
        <a
          className="font-semibold"
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
        >
          TheMovieDB
        </a>
      </p>
    </footer>
  );
}

export default Footer;
