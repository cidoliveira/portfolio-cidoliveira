import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-[15vw] my-[15dvh] font-[Inter] gap-80 bg-white">
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
