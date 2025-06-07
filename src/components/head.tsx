export function Header() {
  return (
    <header className="space-y-6">
      <section className="relative text-center">
        <h1 className=" bg-gradient-to-t from-gray-500 via-zinc-300 to-zinc-50 bg-clip-text text-transparent mt-25 text-center text-4xl font-bold">
          Olá! eu sou <span className="text-primary neon">Igor</span> um,{" "}
          <p>desenvolvedor web </p>
        </h1>
      </section>

      <ul className="flex justify-center  text-zinc-500 font-semibold cursor-pointer gap-5 ">
        <li className=" transition-transform duration-300 hover:-translate-y-1 hover:text-zinc-200">
          <a href="https://github.com/Igor-Brandalise" target="_blank">
            Github
          </a>
        </li>
        <li className=" transition-transform duration-300 hover:-translate-y-1 hover:text-zinc-200">
          <a
            href="https://www.linkedin.com/in/igor-brandalise/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li className=" transition-transform duration-300 hover:-translate-y-1 hover:text-zinc-200">
          <a href="https://my-portfolio-jet-one-16.vercel.app/" target="_blank">
            Portfólio
          </a>
        </li>
      </ul>
    </header>
  );
}
