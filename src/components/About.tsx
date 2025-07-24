import profilePic from "../assets/profile-pic.jpg";
import CV from "../assets/Alcides-Oliveira-CV.pdf";

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#F5F5F5] inline-block self-start items-center text-black text-xs rounded-2xl px-4 py-0.5 gap-1 mb-5">
        About me
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col gap-5 flex-1 min-w-0">
          <h2 className="text-2xl sm:text-3xl text-left font-bold">
            Passionate about creating impactful experiences
          </h2>
          <p className="text-left text-[#737373]">
            With over 5 years of experience in digital design, I specialize in
            crafting intuitive and scalable user experiences for web and mobile
            platforms. My expertise spans UI/UX design, design systems, and
            front-end collaboration using tools like Figma, Adobe CC, and
            prototyping frameworks. I’m passionate about turning complex
            problems into elegant, user-centered solutions and love contributing
            to the creative and design communities.
          </p>
          <div className="flex gap-2.5 mt-5">
            <div className="hover:invert cursor-pointer transition-all">
              <a className="" href="https://github.com/cidoliveira/">
                <button className="flex  gap-2 align-middle items-center bg-[#171717] text-white text-xs pl-2 pr-4 py-2 rounded-full cursor-pointer">
                  <i className="text-xl fa-brands fa-github"></i>
                  View Github
                </button>
              </a>
            </div>
            <div className="cursor-pointer">
              <a className="" href={CV} download={true}>
                <button className="flex border-1 gap-2 align-middle items-center border-[#E5E5E5] text-[#171717] text-xs pl-2 pr-4 py-2 rounded-full cursor-pointer  bg-white">
                  <i className="text-xl fa-solid fa-download"></i> Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
        <img
          className="object-cover w-full sm:w-64 h-120 sm:h-95 rounded-2xl object-top mt-6 sm:mt-0 sm:ml-8"
          src={profilePic}
          alt="Profile picture"
        />
      </div>
    </div>
  );
}
