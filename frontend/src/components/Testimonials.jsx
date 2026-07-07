import { useEffect, useState } from "react";

function Testimonials() {
  const reviews = [
    {
      name: "Mohammed",
      image: "/customer1.jpeg",
      review:
        "Excellent quality goats and very professional service. Highly recommended!",
    },
    {
      name: "Ramesh",
      image: "/customer2.jpeg",
      review:
        "Fresh eggs delivered on time. The quality is amazing.",
    },
    {
      name: "Suresh",
      image: "/customer3.jpeg",
      review:
        "Healthy hens and friendly farm owner. Will buy again.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(autoPlay);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-transparent py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-green-800">
          What Our Customers Say
        </h2>

        <div className="mt-12 bg-green-50 rounded-3xl p-10 shadow-xl transition-all duration-500">

          <img
            src={reviews[current].image}
            alt={reviews[current].name}
            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-600"
          />

          <div className="text-yellow-500 text-3xl mt-4">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-6 text-xl text-gray-700 italic">
            "{reviews[current].review}"
          </p>

          <h3 className="mt-6 text-2xl font-bold text-green-700">
            {reviews[current].name}
          </h3>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">

            <button
              onClick={prevSlide}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              →
            </button>

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index
                    ? "bg-green-700"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;