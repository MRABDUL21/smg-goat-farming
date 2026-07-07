import { useState } from "react";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.product ||
      !formData.quantity
    ) {
      return;
    }

    setSuccess(true);

    setFormData({
      name: "",
      phone: "",
      product: "",
      quantity: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-green-50 py-24 px-6">

      {/* Success Message */}
      {success && (
        <div className="fixed top-24 right-6 bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 animate-bounce">
          ✅ Booking Submitted Successfully!
        </div>
      )}

      <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800">
          Book Your Order
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Place your order for healthy goats, natty hens and fresh eggs.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">

          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-green-600"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Phone Number"
            className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-green-600"
            onChange={handleChange}
          />

          <select
            name="product"
            value={formData.product}
            className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-green-600"
            onChange={handleChange}
          >
            <option value="">Select Product</option>
            <option value="Goat">Goat</option>
            <option value="Natty Hen">Natty Hen</option>
            <option value="Natty Eggs">Natty Eggs</option>
          </select>

          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            placeholder="Quantity"
            className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-green-600"
            onChange={handleChange}
          />

          <textarea
            name="message"
            value={formData.message}
            rows="4"
            placeholder="Additional Message"
            className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-green-600"
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-4 rounded-xl text-lg font-semibold hover:bg-green-800 hover:scale-105 transition"
          >
            Submit Booking 🚀
          </button>

        </form>

      </div>
    </div>
  );
}

export default Booking;