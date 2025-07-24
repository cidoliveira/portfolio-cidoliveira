import mioloLogo from "../assets/miolo-biro.jpg";
import AfferoLabLogo from "../assets/afferolab_logo (1).jpeg";
import leuiLogo from "../assets/leui_laboratorio_ergodesign_interfaces_logo.jpeg";

interface InfoJobProps {
  company: string;
  role: string;
  date: string;
  img: string;
  description: string;
  techs: string[];
}

function InfoJob(props: InfoJobProps) {
  return (
    <div className="flex flex-col my-4 sm:my-6">
      <div className="flex flex-col gap-2 sm:gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F5F5F5] overflow-hidden shrink-0">
            <img
              className="object-cover w-full h-full"
              src={props.img}
              alt={props.company}
            />
          </div>
          <h4 className="text-left text-xs sm:text-sm font-semibold">
            {props.company}
          </h4>
        </div>

        <div className="flex items-center">
          <h5 className="text-sm sm:text-base md:text-lg font-bold">
            {props.role}
          </h5>
        </div>

        <div className="flex gap-2 items-center text-[#737373]">
          <i className="text-xs fa-solid fa-calendar"></i>
          <span className="text-xs sm:text-sm">{props.date}</span>
        </div>

        <p className="text-xs sm:text-sm text-left text-[#737373] mb-2 sm:mb-4">
          {props.description}
        </p>

        <div className="text-left flex flex-wrap gap-2">
          {props.techs &&
            props.techs.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="bg-[#F5F5F5] inline-block self-start text-black text-[10px] sm:text-xs rounded-2xl px-3 py-0.5"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="flex flex-col gap-5 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-2 sm:px-4">
      <div className="bg-[#F5F5F5] inline-flex self-center items-center text-black text-xs sm:text-sm rounded-2xl px-4 py-0.5">
        Experience
      </div>

      <h3 className="text-2xl sm:text-4xl font-bold text-center md:text-center">
        Professional Journey
      </h3>
      <p className="text-[#737373] text-center md:text-center text-sm sm:text-base">
        A timeline of my professional growth and key achievements
      </p>

      <InfoJob
        company="Miolo Birô"
        role="Designer"
        date="2023 - 2024"
        img={mioloLogo}
        description="Worked across multiple design areas, contributing to the development of visual identities, campaign materials, and branded content. Collaborated closely with creative teams and clients to translate ideas into clear, impactful visuals. Adapted to diverse project needs, maintaining consistency and purpose throughout the design process."
        techs={[
          "HTML",
          "CSS",
          "Javascript",
          "Figma",
          "Photoshop",
          "Illustrator",
          "Premiere",
          "After Effects",
        ]}
      />

      <InfoJob
        company="Afferolab"
        role="Designer"
        date="2020 - 2022"
        img={AfferoLabLogo}
        description="Created visual assets for campaigns, social media, and institutional materials. Contributed to the creative process from concept to final delivery, ensuring visual consistency and alignment with brand goals. Collaborated with cross-functional teams on a variety of projects, adapting the visual language to suit different audiences and platforms."
        techs={[
          "HTML",
          "CSS",
          "Javascript",
          "Figma",
          "Photoshop",
          "Illustrator",
          "Premiere",
          "After Effects",
        ]}
      />

      <InfoJob
        company="LEUI – Laboratory of Ergodesign and Interface Usability"
        role="UX Researcher"
        date="2020 - 2021"
        img={leuiLogo}
        description="Contributed to research and design projects focused on user experience, interface usability, and accessibility. Participated in user testing, interface evaluation, and the development of wireframes and prototypes. Worked closely with researchers and designers to apply human-centered design principles to digital interfaces and services."
        techs={[
          "Figma",
          "Photoshop",
          "Illustrator",
          "InDesign",
          "Premiere",
          "After Effects",
          "Miro",
        ]}
      />
    </section>
  );
}
