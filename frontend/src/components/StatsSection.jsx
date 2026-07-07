function StatsSection() {
  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "250+", label: "Goats Sold" },
    { value: "1500+", label: "Eggs Delivered" },
    { value: "100%", label: "Natural Farming" },
  ];

  return (
    <section className="bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-green-800">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl shadow-lg bg-white"
            >
              <h3 className="text-5xl font-bold text-green-700">
                {item.value}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;