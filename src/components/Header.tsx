import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between border rounded-full border-[#E5E5E5] p-1 px-5 text-[#171717] sticky top-10">
      <a href="#home">
        <img className="size-10 transition-all" src={logo} alt="Logo" />
      </a>
      <ul className="flex gap-[2vw] text-xs">
        <li className="">
          <a className="hover:font-bold  transition-all" href="#about">
            <span className="inline-block min-w-[60px]">About</span>
          </a>
        </li>
        <li className="">
          <a className="hover:font-bold transition-all" href="#experience">
            <span className="inline-block min-w-[80px]">Experience</span>
          </a>
        </li>
        <li className="">
          <a className="hover:font-bold transition-all" href="#projects">
            <span className="inline-block min-w-[60px]">Projects</span>
          </a>
        </li>
      </ul>
      <div className="flex gap-2.5">
        <div className="w-8 h-8 flex border-solid border rounded-full items-center justify-center">
          <a href="https://www.linkedin.com/in/cidoliveira1/">
            <i className="fa-brands fa-linkedin hover:text-[#E5E5E5] transition-all"></i>
          </a>
        </div>
        <div className="w-8 h-8 flex border rounded-full items-center justify-center">
          <a href="https://github.com/cidoliveira/">
            <i className="fa-brands fa-github hover:text-[#E5E5E5] transition-all"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
