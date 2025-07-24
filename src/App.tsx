import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mx-2 sm:mx-[8vw] lg:mx-[15vw] my-25 sm:my-[8vh] lg:my-[15dvh] font-[Inter] bg-white">
        <section id="home" className="scroll-mt-50 mb-45">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-45 mb-45">
          <About />
        </section>
        <section id="experience" className="scroll-mt-45 mb-45">
          <Experience />
        </section>
      </div>
    </div>
  );
}
export default App;
