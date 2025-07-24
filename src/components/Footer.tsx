export default function Footer() {
  return (
    <footer className="w-full mt-8 py-6 px-4 border-t border-[#E5E5E5] bg-white text-[#171717] text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex flex-col gap-1">
          <span>&copy; {new Date().getFullYear()} Alcides Oliveira</span>
        </div>
        <div className="flex gap-3 mt-2 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/cidoliveira1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin text-xl hover:text-[#888] transition-all"></i>
          </a>
          <a
            href="https://github.com/cidoliveira/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github text-xl hover:text-[#888] transition-all"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
