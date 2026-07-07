function WhyChooseUs() {
  const features = [
    {
      icon: "🌿",
      title: "Natural Farming",
      description: "Raised naturally with proper nutrition and care.",
    },
    {
      icon: "🐐",
      title: "Healthy Goats",
      description: "Strong, healthy and farm-raised livestock.",
    },
    {
      icon: "🥚",
      title: "Fresh Eggs",
      description: "Collected daily and delivered fresh.",
    },
    {
      icon: "🚚",
      title: "Direct Delivery",
      description: "Connect directly with the farm owner.",
    },
  ];

  return (
    <section className="bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-800">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg text-center hover:-translate-y-2 transition"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;