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
      <div className="flex flex-col mx-2 max-sm:m-0 max-sm:mt-10 sm:mx-[10vw] lg:mx-[12vw] my-25 sm:my-[8vh] lg:my-[9vh] font-[Inter] bg-white">
        <motion.section
          id="home"
          className="mt-16 sm:mt-20 mb-16 sm:mb-40"
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
          className="mt-16 sm:mt-20 mb-16 sm:mb-20"
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
          className="mt-16 sm:mt-20 mb-16 sm:mb-20"
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
          className="mt-16 sm:mt-20 mb-16 sm:mb-20"
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
