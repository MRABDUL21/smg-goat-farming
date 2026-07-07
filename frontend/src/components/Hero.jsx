import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/farm.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Floating Glow */}
      <div className="absolute w-96 h-96 bg-green-400/20 rounded-full blur-3xl top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl bottom-20 right-20"></div>

      {/* Goat */}
      <motion.img
        src="/goat.png"
        alt="Goat"
        className="absolute bottom-16 left-4 md:left-12 w-32 md:w-52 z-10"
        initial={{ x: -400, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, -15, 0],
        }}
        transition={{
          x: { duration: 1.5 },
          opacity: { duration: 1.5 },
          y: {
            duration: 3,
            repeat: Infinity,
          },
        }}
      />

      {/* Hen */}
      <motion.img
        src="/hen.png"
        alt="Hen"
        className="absolute bottom-16 right-4 md:right-12 w-24 md:w-40 z-10"
        initial={{ x: 400, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          x: { duration: 1.5 },
          opacity: { duration: 1.5 },
          y: {
            duration: 2.5,
            repeat: Infinity,
          },
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Welcome To
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-4xl md:text-7xl font-extrabold text-green-300"
        >
          SMG Goat Farming
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-xl md:text-3xl"
        >
          Healthy Goats • Natty Hens • Fresh Eggs
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10"
        >
          <Link
            to="/booking"
            className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl text-xl font-bold shadow-2xl transition"
          >
            Book Now
          </Link>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-4xl"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        ↓
      </motion.div>

    </section>
  );
}

export default Hero;