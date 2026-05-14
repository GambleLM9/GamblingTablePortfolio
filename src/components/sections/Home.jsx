export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-1 bg-gradient-to-r from-green-500 to-red-600 bg-clip-text text-transparent leading-right">
          Welcome to the Table!
        </h1>
        <h3 className="mb-5">- GambleLM9</h3>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          The playing table of Gamble, a dedicated and driven developer seeking
          to tackle ambitious goals and "big risks" one careful step and one
          thorough solution at a time.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="border border-green-500/50 bg-red-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.4)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-green-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,246,130,0.2)] hover:bg-red-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
