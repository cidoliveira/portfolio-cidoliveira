import taskBlossomLogo from "../assets/task-blossom-logo.png";

export default function Projects() {
  return (
    <section className="flex flex-col gap-5 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-2 sm:px-4">
      <div className="bg-[#F5F5F5] inline-flex self-center items-center text-black text-xs sm:text-sm rounded-2xl px-4 py-0.5">
        Projects
      </div>

      <h3 className="text-2xl sm:text-4xl font-bold text-center md:text-center">
        Featured Work
      </h3>
      <p className="text-[#737373] text-center md:text-center text-sm sm:text-base">
        Showcasing some of my best projects and technical achievements
      </p>
      <div className="grid grid-cols-2">
        <div className="">
          <img
            className="object-cover w-100 h-60"
            src={taskBlossomLogo}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
