export default function Hero() {
  return (
    <article
      id="home"
      className=" flex flex-col justify-center align-middle items-center"
    >
      <div className="self-center flex items-center text-white bg-[#171717] text-xs rounded-2xl px-4 py-0.5 gap-1 mb-10">
        <i className="fa-solid fa-bolt"></i>
        <span className="text-nowrap">
          Front-End Developer & UX/UI Designer
        </span>
      </div>
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl font-bold">
          Building Scalable & Engaging Experiences
        </h1>
        <p className="mb-10">
          Hey there! I'm Alcides Oliveira, a Front-End Developer & UX/UI
          Designer who loves building cool web experiences. From crafting
          beautiful frontends to powering robust systems, I bring ideas to life
          with clean code and great design. Let's create something amazing
          together! 🚀
        </p>
      </div>
      <a href="#projects">
        <button className="cursor-pointer flex items-center gap-2 pl-4 pr-2 py-2 text-xs rounded-full text-white bg-[#171717] hover:invert transition-all">
          See What I Do
          <i className="text-2xl fa-solid fa-circle-arrow-down"></i>
        </button>
      </a>
    </article>
  );
}
