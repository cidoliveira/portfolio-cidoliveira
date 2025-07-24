import taskBlossomLogo from "../assets/task-blossom-logo.png";
import stardewValleyMatchmakerLogo from "../assets/stardew-valley-matchmaker-logo.png";
import randomPasswordLogo from "../assets/R2BZiqn.png";

function Project(props) {
  return (
    <div className="border rounded-2xl w-80">
      <img
        className="object-cover w-full h-50 bg-[#f8f4fc] rounded-t-2xl"
        src={props.logo}
        alt=""
      />
      <div className="text-left flex flex-col mt-2.5 p-5">
        <h4 className="font-bold mb-2.5">{props.name}</h4>
        <p>{props.description}</p>
        <div className="self-start mt-5 flex gap-2.5 flex-wrap">
          {props.techs &&
            props.techs.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#F5F5F5] inline-flex text-black text-xs sm:text-[10px] rounded-2xl px-4 py-0.5"
              >
                {tech}
              </span>
            ))}
        </div>
        <div className="flex gap-2.5 mt-5">
          <div className="hover:invert cursor-pointer transition-all">
            <a className="" href={props.livePreview}>
              <button className="flex gap-2 align-middle items-center bg-[#171717] text-white text-xs pl-2 pr-4 py-2 rounded-full cursor-pointer">
                <i className="text-xl fa-solid fa-globe"></i>
                Live Preview
              </button>
            </a>
          </div>
          <div className="cursor-pointer">
            <a className="" href={props.github}>
              <button className="flex border-1 gap-2 align-middle items-center border-[#E5E5E5] text-[#171717] text-xs pl-2 pr-4 py-2 rounded-full cursor-pointer bg-white">
                <i className="text-xl fa-brands fa-github"></i> View Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="flex flex-col gap-5 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-2 sm:px-4 items-center gap">
      <div className="bg-[#F5F5F5] inline-flex self-center items-center text-black text-xs sm:text-sm rounded-2xl px-4 py-0.5">
        Projects
      </div>
      <h3 className="text-2xl sm:text-4xl font-bold text-center md:text-center">
        Featured Work
      </h3>
      <p className="text-[#737373] text-center md:text-center text-sm sm:text-base">
        Showcasing some of my best projects and technical achievements
      </p>
      <div className="grid grid-cols-2 gap-10 mt-10 max-sm:grid-cols-1">
        <Project
          logo={taskBlossomLogo}
          name="Task Blossom"
          description="A minimalist, pastel-purple task manager that combines a to-do list, Pomodoro timer, and random anime GIFs to make productivity playful."
          techs={[
            "HTML",
            "CSS",
            "JavaScript",
            "Photoshop",
            "Illustrator",
            "Figma",
          ]}
          livePreview="https://task-blossom.vercel.app/"
          github="https://github.com/cidoliveira/task-blossom"
        />
        <Project
          logo={stardewValleyMatchmakerLogo}
          name="Stardew Valley Couple Matchmaker"
          description="A 12-question personality quiz that pairs you with the Stardew Valley bachelor or bachelorette who best matches your vibe."
          techs={[
            "HTML",
            "CSS",
            "JavaScript",
            "Photoshop",
            "Illustrator",
            "Figma",
          ]}
          livePreview="https://stardew-valley-matchmaker.vercel.app/"
          github="https://github.com/cidoliveira/stardew-valley-matchmaker"
        />
        <Project
          logo={randomPasswordLogo}
          name="Random Password Generator"
          description="A lightweight, responsive web app that creates strong, 16-character passwords using letters, numbers, and symbols."
          techs={[
            "HTML",
            "CSS",
            "JavaScript",
            "Photoshop",
            "Illustrator",
            "Figma",
          ]}
          livePreview="https://password-generator-cidoliveira.vercel.app/"
          github="https://github.com/cidoliveira/password-generator"
        />
      </div>
    </section>
  );
}
