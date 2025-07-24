import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col mx-2 max-sm:m-0 max-sm:mt-10 sm:mx-[10vw] lg:mx-[12vw] my-25 sm:my-[8vh] lg:my-[15dvh] font-[Inter] bg-white">
        <motion.section
          id="home"
          className="max-sm:mb-20 max-sm:mt-10 scroll-m-60 mt-15 mb-45"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeInUp}
        >
          <Hero />
        </motion.section>
        <motion.section
          id="about"
          className="max-sm:mb-0 max-sm:mt-0 scroll-m-60 mt-45 mb-45"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeInUp}
        >
          <About />
        </motion.section>
        <motion.section
          id="experience"
          className="max-sm:mb-0 max-sm:mt-20 scroll-m-40 mt-45 mb-45"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeInUp}
        >
          <Experience />
        </motion.section>
        <motion.section
          id="projects"
          className="max-sm:mb-0 max-sm:mt-20 scroll-m-40 mt-45 mb-45"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeInUp}
        >
          <Projects />
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}
export default App;
