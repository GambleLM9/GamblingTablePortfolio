export const About = () => {

  const frontendSkills = ("React", "Vue", "CSS", "Tailwind")
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-3xl mx-auto px-4 mb-8 bg-gradient-to-r from-red-500 to-green-400 bg-clip-text text-transparent ">
        <h2>My Hand (About Me)</h2>
        <div className="rounded-xl p-8 border-red/10 border hover:translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Creative, thorough, and flexible developer, able to adapt to any
            circumstances no matter what cards are dealt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
//59:08
