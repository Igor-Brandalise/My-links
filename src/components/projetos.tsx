export function Projetos() {
  return (
    <main className="flex flex-col m-auto justify-center mt-12 w-[350px] gap-4">


      <a
        href="https://igor-brandalise.github.io/CoinTrack/"
        target="_blank"
        className="hover:bg-amber-500/5 transition-all hover:scale-[1.01] rounded-2xl p-3    "
      >
        <section className="flex flex-row gap-4 rounded-xl pl-1">
          <img src="/public/coin.png" alt="" className=" size-5" />
          <span className="text-white font-bold">Coin-track</span>
        </section>
        <section className="text-gray-500 flex flex-col w-[300px] ">
          <p className="mt-2 ml-10 text-muted/60 text-sm">
            Comparar os preços de criptomoedas e moedas fiduciárias em tempo
            real
          </p>
        </section>
      </a>

      <a
        href="https://todo-list-seven-rho-99.vercel.app/"
        target="_blank"
        className="hover:bg-amber-500/5 transition-all hover:scale-[1.01] rounded-2xl p-3    "
      >
        <section className="flex flex-row gap-4 rounded-xl pl-1">
          <img src="/public/wish-list_3585145.png" alt="" className=" size-5" />
          <span className="text-white font-bold">Todo list</span>
        </section>
        <section className="text-gray-500 flex flex-col w-[300px] ">
          <p className="mt-2 ml-10 text-muted/60 text-sm">
            Uma lista de tarefas que organiza atividades a serem realizadas
          </p>
        </section>
      </a>

      <a
        href="https://weather-me-seven.vercel.app/"
        target="_blank"
        className="hover:bg-amber-500/5 transition-all hover:scale-[1.01] rounded-2xl p-3    "
      >
        <section className="flex flex-row gap-4 rounded-xl pl-1">
          <img src="/public/5903430.png" alt="" className=" size-5" />
          <span className="text-white font-bold">WeatherMe</span>
        </section>
        <section className="text-gray-500 flex flex-col w-[300px] ">
          <p className="mt-2 ml-10 text-muted/60 text-sm">
            Aplicativo de previsão do tempo em tempo real
          </p>
        </section>
      </a>

            <a
        href="https://buscador-de-cep-ruby.vercel.app/"
        target="_blank"
        className="hover:bg-amber-500/5 transition-all hover:scale-[1.01] rounded-2xl p-3    "
      >
        <section className="flex flex-row gap-4 rounded-xl pl-1">
          <img
            src="/public/search-engine-optimization.png"
            alt=""
            className=" size-5"
          />
          <span className="text-white font-bold">buscador-de-cep</span>
        </section>
        <section className="text-gray-500 flex flex-col w-full">
          <p className="mt-2 ml-10 text-muted/60 text-sm">
            Permite buscar endereços a partir de um número de CEP
          </p>
        </section>
      </a>
    </main>
  );
}
