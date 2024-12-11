import {
  BsChatDots,
  BsCheckSquare,
  BsPeople,
  BsLightning,
  BsArrowRight,
} from "react-icons/bs";

const FeatureSection = () => {
  const dotStyle = {
    backgroundColor: "black",
    width: "2.2px",
    height: "2.2px",
    borderRadius: "70%",
    margin: "22px",
  };

  const createDotGrid = () => {
    const dots = [];
    const rows = 40;
    const cols = 100;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        dots.push(
          <div
            key={`${i}-${j}`}
            style={{
              ...dotStyle,
              opacity: 0.5,
              position: "absolute",
              top: `${i * 30}px`,
              left: `${j * 30}px`,
            }}
          />
        );
      }
    }
    return dots;
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#ffb8ff] pt-10" id="features">
      <div className="absolute inset-0 overflow-hidden">{createDotGrid()}</div>

      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Keeping it unchanged */}
          <div className="flex flex-col space-y-8 bg-white/50 p-10 rounded-3xl">
            <h1 className="text-5xl font-bold text-black">
              Revolutionize Your Workflow
            </h1>

            <div className="space-y-6 font-mono text-black text-lg leading-relaxed">
              <p>
                Say goodbye to chaos. Glitch is here to make your life simpler
                and your work more manageable. Dive into a realm of seamless
                real-time communication and efficient task management.
              </p>
              {/* Stats Section */}
              <div className="bg-transparent p-4">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: "500K+", label: "Active Users" },
                    { number: "99.9%", label: "Uptime" },
                    { number: "24/7", label: "Support" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="backdrop-blur-sm bg-white/30 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300 border border-white/50"
                    >
                      <p className="text-2xl font-bold text-black mb-1">
                        {stat.number}
                      </p>
                      <p className="text-sm text-gray-800">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p>
                Our platform has been built for you—the hard-working teachers
                pushing for enlightenment, the entrepreneurs seeking success,
                and all professionals and students in between.
              </p>
              <p>
                Glitch isn't just a tool, it's your new right-hand man. You'll
                wonder how you ever managed without it.
              </p>
            </div>

            <button className="mt-auto w-full inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-black rounded-md hover:bg-gray-950 transition-colors">
              Get Started
              <BsArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Enhanced Right Column */}
          <div className="flex flex-col gap-6">
            {/* Feature Cards Section */}
            <div className="bg-white/50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-black mb-8 flex items-center backdrop-blur-sm bg-white/50 p-4 rounded-xl">
                <span className="text-3xl mr-2">🚀</span>
                Features That Actually Make Sense
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <BsChatDots className="w-8 h-8 text-purple-600" />,
                    title: "Real-Time Chat",
                    desc: "Now you can shoot messages quicker than dodging your ex at a high school reunion.",
                    gradient: "from-white/40 to-white/20",
                  },
                  {
                    icon: <BsCheckSquare className="w-8 h-8 text-blue-600" />,
                    title: "Task Management",
                    desc: "Organizing your tasks easier than figuring why cats have killer instincts for screen protectors.",
                    gradient: "from-white/40 to-white/20",
                  },
                  {
                    icon: <BsLightning className="w-8 h-8 text-amber-600" />,
                    title: "Innovation",
                    desc: "Used high-tech sorcery called Firebase and Redux for problem-solving, just fancy names, big deal!",
                    gradient: "from-white/40 to-white/20",
                  },
                  {
                    icon: <BsPeople className="w-8 h-8 text-green-600" />,
                    title: "Team Collaboration",
                    desc: "Work together, without actually toiling together. Yes, we're also anti-social sometimes.",
                    gradient: "from-white/40 to-white/20",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${feature.gradient} p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/50 `}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-white/70 backdrop-blur-sm p-3 rounded-xl">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-black mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-800 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
