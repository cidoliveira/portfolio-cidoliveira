import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mx-2 max-sm:m-0 max-sm:mt-10 sm:mx-[10vw] lg:mx-[15vw] my-25 sm:my-[8vh] lg:my-[15dvh] font-[Inter] bg-white">
        <section
          id="home"
          className="max-sm:mb-0 max-sm:mt-0 scroll-m-60 mt-15 mb-45"
        >
          <Hero />
        </section>
        <section
          id="about"
          className="max-sm:mb-0 max-sm:mt-0 scroll-m-60 mt-45 mb-45"
        >
          <About />
        </section>
        <section
          id="experience"
          className="max-sm:mb-0 max-sm:mt-20 scroll-m-60 mt-45 mb-45"
        >
          <Experience />
        </section>
      </div>
    </div>
  );
}
export default App;
