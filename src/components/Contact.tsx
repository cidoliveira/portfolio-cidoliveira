export default function Contact() {
  return (
    <section className="w-full max-w-2xl mx-auto flex flex-col gap-6 py-12 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-left mb-2">Contact</h1>
      <p className="text-left text-[#737373] text-base sm:text-lg mb-4">
        Want to get in touch? Feel free to reach out for collaborations, project
        inquiries, or just to say hello!
      </p>
      <a
        href="mailto:alcides.angelo10@gmail.com"
        className="inline-block w-fit bg-[#171717] text-white text-xs sm:text-sm font-medium rounded-full px-6 py-3 hover:invert transition-all shadow-md"
      >
        Email me: alcides.angelo10@gmail.com
      </a>
    </section>
  );
}
