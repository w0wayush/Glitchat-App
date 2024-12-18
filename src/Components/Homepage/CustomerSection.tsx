import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import { LuArrowUpLeft } from "react-icons/lu";
import GlassCard from "./GlassCard";
const logo = require("../../Assets/Vector3.png");

const Cards = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/474x/8a/e8/be/8ae8be5c6051eed642d919cc08922c3a.jpg",
    alt: "Andrew Tate",
    name: "Andrew Tate",
    title: "Motivator",
    description: "GlitchChat has been a game-changer for my productivity.",
  },
  {
    id: "2",
    image:
      "https://i.pinimg.com/736x/6a/1d/99/6a1d996616a23a297d47fece8bc0bba1.jpg",
    alt: "Mr Beast",
    name: "Mr Beast",
    title: "Gamer",
    description:
      "I've been using GlitchChat for years and it's the best tool I've found.",
  },
  {
    id: "3",
    image:
      "https://i.pinimg.com/736x/ff/94/c4/ff94c42d8182d2cf3c977da1eedc3007.jpg",
    alt: "Olivia Rodrigo",
    name: "Olivia Rodrigo",
    title: "Digital Marketing",
    description: "GlitchChat has transformed the way I manage my workflow.",
  },
];

const CustomerSection = () => {
  return (
    <div
      className="bg-[#ffb8ff]/40 min-h-screen text-black py-12 sm:py-16 md:py-24"
      id="customers"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0">
          {/* Testimonial Badge */}
          <div className="w-[50%] mx-auto sm:w-[30%] lg:w-[25%]">
            <div className="text-lg md:text-xl font-mono border-2 border-black rounded-full px-3 py-1 sm:px-4 sm:py-2 text-center">
              Testimonial
            </div>
          </div>

          {/* Main Heading */}
          <div className="w-full lg:w-[50%]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 lg:mb-8 text-center lg:text-left lg:pl-20">
              Over 20K+ Stories from{" "}
              <span className="text-pink-300">GlitchChatUsers</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm md:pb-10 sm:text-base md:text-lg w-full lg:w-[25%] text-center lg:text-left">
            Hear from our satisfied users about their experiences and the impact
            GlitchChat has had on their workflow.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {/* Card 1 */}
          {Cards.map((card) => {
            return (
              <GlassCard card={card} key={card.id}/>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-black text-white rounded-3xl p-4 sm:p-6 lg:p-8 mt-8 sm:mt-10 lg:mt-12 backdrop-blur-sm bg-black/70 border-black/80 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <div className="flex items-center justify-between ">
            <LuArrowUpLeft className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold hover:text-pink-200 flex gap-5 items-center" >
              See all reviews by our{" "}
              <img src={logo} alt="logo" className="h-14 w-14 mt-2" /> Customers
            </div>
            <GoArrowDownRight className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;
