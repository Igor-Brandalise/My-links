export function Footer() {
  return (
    <footer className="flex justify-center flex-col mt-7">
      <p className="text-white/15 text-center" >typescript • react • tailwind • git</p>
      <section className="flex flex-row m-auto mt-3 ">
        <p className="text-white/20 mr-2">design baseado em </p>{" "}
        <a
          href="https://tiagorangel.com/"
          className="text-zinc-50 "
          target="_blank"
        >
          tiagorangel.com
        </a>
      </section>
    </footer>
  );
}
