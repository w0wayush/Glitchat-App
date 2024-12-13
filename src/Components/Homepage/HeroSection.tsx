import { TfiArrowCircleRight } from "react-icons/tfi";
import { MdChecklistRtl, MdCloud, MdStars } from "react-icons/md";
import { FeatureCard } from "./FeatureCard";
import { getStorageUser } from "../../Backend/Queries";
import { useNavigate } from "react-router-dom";

// const featureItems = [
//   {
//     title: "Seamless Integration",
//     color: "bg-gray-300/50",
//   },
//   {
//     title: "Real-time Collaboration",
//     color: "bg-gradient-to-r from-pink-300/50 to-purple-500/20",
//   },
//   {
//     title: "Increased Productivity",
//     color: "bg-gray-300/50",
//   },
//   {
//     title: "Smart Task Management",
//     color: "bg-gradient-to-r from-sky-300/50 to-blue-500/20",
//   },
//   // {
//   //   title: "Intuitive Dashboard",
//   //   color: "bg-gray-300/50",
//   // },
// ];

const features = [
  {
    icon: MdChecklistRtl,
    title: "Integrated To-Do Lists",
    subtitle: "Beating Procrastination",
  },
  {
    icon: MdCloud,
    title: "Real-Time Communication",
    subtitle: "Unleash Team Potential",
  },
  {
    icon: MdStars,
    title: "User Friendly",
    subtitle: "Intuitive Design",
  },
];

const sliderImagesUp = [
  "https://i.pinimg.com/474x/24/d4/f3/24d4f3da729ade566e53fd7fa970bcde.jpg",
  "https://i.pinimg.com/236x/9a/d7/71/9ad771d7e0abace60831ef640ba88328.jpg",
  "https://i.pinimg.com/736x/3e/90/a9/3e90a965387cab375bd7553706130128.jpg",
  "https://i.pinimg.com/236x/4a/7a/c2/4a7ac26bb0b11457f6d4e23f4e925efd.jpg",
  "https://i.pinimg.com/474x/24/d4/f3/24d4f3da729ade566e53fd7fa970bcde.jpg",
  "https://i.pinimg.com/236x/9a/d7/71/9ad771d7e0abace60831ef640ba88328.jpg",
  "https://i.pinimg.com/736x/3e/90/a9/3e90a965387cab375bd7553706130128.jpg",
  "https://i.pinimg.com/236x/4a/7a/c2/4a7ac26bb0b11457f6d4e23f4e925efd.jpg",
];

const sliderImagesDown = [
  "https://i.pinimg.com/236x/e9/6d/63/e96d63d72d3d988afda47ab7b1619b37.jpg",
  "https://i.pinimg.com/236x/b4/3f/33/b43f3341353fe6d1f102b8af80ea8aa9.jpg",
  "https://i.pinimg.com/236x/18/13/c8/1813c88423ed915c1a07f5bf68b48425.jpg",
  "https://i.pinimg.com/236x/25/97/91/259791bed227fa612f46a9c46530766d.jpg",
  "https://i.pinimg.com/236x/e9/6d/63/e96d63d72d3d988afda47ab7b1619b37.jpg",
  "https://i.pinimg.com/236x/e9/6d/63/e96d63d72d3d988afda47ab7b1619b37.jpg",
  "https://i.pinimg.com/236x/b4/3f/33/b43f3341353fe6d1f102b8af80ea8aa9.jpg",
  "https://i.pinimg.com/236x/18/13/c8/1813c88423ed915c1a07f5bf68b48425.jpg",
  "https://i.pinimg.com/236x/25/97/91/259791bed227fa612f46a9c46530766d.jpg",
];

const HeroSection = () => {
const user = getStorageUser();
const navigate = useNavigate()

  const handleGoToPage = (page: string) => {
    navigate("/dashboard/" + page);
    setCurrentPage(page);
  };

const setCurrentPage = (page: string) => {
  localStorage.setItem("superhero-page", page);
};

const handleGlitchClick = () => {
  if(user) {
    handleGoToPage("chat");
  } else {
    navigate("/auth")
  }
}

  return (
    <div className="min-h-screen pt-24 md:pt-0 bg-[#ffb8ff]/40 text-black relative overflow-hidden">
      {/* Main content container */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full md:space-x-10 lg:space-x-0">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center h-full md:pl-4 lg:pl-0 lg:pt-16">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
                Empower <br />
                Connections with <br />
                <span className="text-pink-300">GlitchChat</span>
              </h1>

              <div className="flex flex-col items-center justify-center bg-white/40 rounded-xl p-4">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>

              {/* <p className="text-xl text-gray-600 max-w-full text-left">
                Forget the hassle of juggling between multiple apps. Glitch
                merges seamless real-time communication and efficient task
                management into one, making task collaboration as easy as
                sending emojis to your friends. Specially tailored for
                educational and professional settings, our app takes
                productivity to the next level.
                <b>
                  Seamlessly integrate real-time communication and task
                  management in one powerful platform.
                </b>{" "}
                Boost your team's productivity today.
              </p> */}

              <div className="flex flex-wrap gap-4 pb-8">
                <button className="px-5 py-2 flex items-center gap-3 bg-pink-400 text-white rounded-full font-medium hover:bg-pink-400/80 transition" onClick={handleGlitchClick}>
                  Try GlitchChat <TfiArrowCircleRight size={24} color="white" />
                </button>
                <a
                  href="#features"
                  className="px-5 py-2 flex items-center gap-3 bg-transparent rounded-full font-medium border border-pink-500 hover:bg-[#F3F4F6] text-pink-500 transition"
                >
                  Learn More
                  <TfiArrowCircleRight size={24} />
                </a>
              </div>
            </div>

            {/* <div className="md:mt-28 mt-14 flex flex-wrap gap-4">
              {featureItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-4 py-2 rounded-full ${item.color}`}
                >
                  <p className="text-sm font-semibold text-gray-700">
                    {item.title}
                  </p>
                </div>
              ))} 
            </div>*/}
          </div>

          {/* Right side - Visual elements */}
          <div className="md:block hidden">
            <div className="flex">
              <div
                className="logos max-h-screen overflow-hidden"
                data-speed="fast"
              >
                <div className="">
                  {sliderImagesUp.map((images, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center gap-3 px-4 py-2 rounded-full animate-slide-vertical-up h-full `}
                    >
                      <img
                        src={images}
                        className="h-[200px] w-[250px] lg:h-[400px] lg:w-[300px] object-cover rounded-2xl lg:rounded-3xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="logos max-h-screen overflow-hidden"
                data-speed="fast"
              >
                <div className="">
                  {sliderImagesDown.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center gap-3 px-4 py-2 rounded-full animate-slide-vertical-down h-full`}
                    >
                      <img
                        src={item}
                        className="h-[200px] w-[250px] lg:h-[400px] lg:w-[300px] object-cover rounded-2xl lg:rounded-3xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
