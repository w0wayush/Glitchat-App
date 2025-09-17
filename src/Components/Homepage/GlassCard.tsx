import React from "react";
import { motion } from "framer-motion";

interface TCard {
  id: string;
  image: string;
  alt: string;
  name: string;
  title: string;
  description: string;
}

type GlassCardProps = {
  card: TCard;
};

const GlassCard: React.FC<GlassCardProps> = ({ card }) => {
  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: parseInt(card.id) * 0.2 }}
      className={`relative overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl ${
        card.id === "3" && "col-span-2 lg:col-span-1"
      }`}
    >
      <motion.img
        src={card.image}
        alt={card.alt}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
      />

      {/* Glass effect container */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: parseInt(card.id) * 0.3,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ y: 0 }}
        className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-white/10 border-t border-white/20 p-4 sm:p-6 text-white"
      >
        <motion.div
          className="relative z-10 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: parseInt(card.id) * 0.4 }}
        >
          <motion.h3
            className="text-lg sm:text-xl font-bold text-white/90"
            whileHover={{ scale: 1.02 }}
          >
            {card.name}
          </motion.h3>

          <motion.p
            className="text-white/70 mb-2 sm:mb-4 text-sm sm:text-base"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: parseInt(card.id) * 0.5 }}
          >
            {card.title}
          </motion.p>

          <motion.p
            className="text-white/80 text-sm sm:text-base"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: parseInt(card.id) * 0.6 }}
          >
            "{card.description}"
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Hover effect overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-pink-300/10 pointer-events-none"
      />
    </motion.div>
  );
};

export default GlassCard;
