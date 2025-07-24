import SplitText from "../blocks/TextAnimations/SplitText/SplitText";

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <article className="flex flex-col justify-center items-center px-2 sm:px-0">
      <div className="self-center flex items-center text-white bg-[#171717] text-xs sm:text-sm rounded-2xl px-4 py-0.5 gap-1 mb-6 sm:mb-10">
        <i className="fa-solid fa-bolt"></i>
        <span className="whitespace-nowrap">
          Front-End Developer & UX/UI Designer
        </span>
      </div>
      <div className="flex flex-col gap-6 sm:gap-10">
        {
          <SplitText
            text="Building Scalable & Engaging Experiences"
            className="text-3xl sm:text-6xl font-bold text-center pb-2"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        }
        <p className="mb-6 sm:mb-10 text-base sm:text-lg text-center">
          Hey there! I'm Alcides Oliveira, a Front-End Developer & UX/UI
          Designer who loves building cool web experiences. From crafting
          beautiful frontends to powering robust systems, I bring ideas to life
          with clean code and great design. Let's create something amazing
          together! 🚀
        </p>
      </div>
      <a href="#projects">
        <button className="cursor-pointer flex items-center gap-2 pl-4 pr-2 py-2 text-xs sm:text-sm rounded-full text-white bg-[#171717] hover:invert transition-all">
          See What I Do
          <i className="text-2xl fa-solid fa-circle-arrow-down"></i>
        </button>
      </a>
    </article>
  );
}
