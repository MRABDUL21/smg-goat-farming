import ProductCard from "./ProductCard";

function Products() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-800">
          Our Products
        </h2>

        <p className="text-center mt-4 text-gray-600">
          Premium livestock and farm-fresh products from SMG Goat Farming.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <ProductCard
            image="/goat-card.jpeg"
            title="Premium Goats"
            description="Healthy farm-raised goats with excellent nutrition and care."
          />

          <ProductCard
            image="/hen-card.jpeg"
            title="Natty Hens"
            description="Naturally raised country hens with quality feeding."
          />

          <ProductCard
            image="/egg-card.jpeg"
            title="Fresh Natty Eggs"
            description="Fresh organic eggs collected daily from healthy hens."
          />

        </div>

      </div>
    </section>
  );
}

export default Products;