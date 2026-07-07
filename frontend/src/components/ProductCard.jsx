import { motion } from "framer-motion";

function ProductCard({ image, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="overflow-hidden rounded-3xl bg-white shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-800">
          {title}
        </h3>

        <p className="text-gray-600 mt-3">
          {description}
        </p>

        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default ProductCard;