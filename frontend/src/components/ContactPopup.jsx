import { useState } from "react";

function ContactPopup() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const text = `
Name: ${form.name}
Phone: ${form.phone}
Product: ${form.product}
Message: ${form.message}
`;

    const url = `https://wa.me/919940994895?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-xl z-50 hover:scale-105 transition"
      >
        💬 Chat With Us
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white w-full max-w-md p-6 rounded-3xl">

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                SMG Goat Farming
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <select
                name="product"
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Select Product</option>
                <option>Goat</option>
                <option>Natty Hen</option>
                <option>Natty Eggs</option>
              </select>

              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              ></textarea>

              <button
                onClick={sendWhatsApp}
                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
              >
                Send via WhatsApp
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default ContactPopup;