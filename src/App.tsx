import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mx-2 sm:mx-[8vw] lg:mx-[15vw] my-25 sm:my-[8vh] lg:my-[20dvh] font-[Inter] bg-white">
        <section id="home" className="scroll-mt-70 mb-80">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-50 mb-80">
          <About />
        </section>
        <section id="experience" className="scroll-mt-50 mb-80">
          <Experience />
        </section>
      </div>
    </div>
  );
}
export default App;
