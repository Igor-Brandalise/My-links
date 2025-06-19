import "./index.css";
import { Header } from "./components/head";
import { Projetos } from "./components/projetos";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-[108vh]">
      <Header />
      <Projetos />
      <hr className="mt-9 m-auto w-[350px] text-white/6 border-2" />
      <Footer />
    </div>
  );
}

export default App;
