function Location() {
  return (
    <section className="bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-800">
          Visit Our Farm
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Find us easily and experience natural farming firsthand.
        </p>

        <div className="mt-12 bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="p-8 text-center">
            <h3 className="text-3xl font-bold text-green-800">
              SMG Goat Poultry Farm
            </h3>

            <p className="mt-3 text-gray-600">
              Salem, Tamil Nadu, India
            </p>

            <a
              href="https://maps.google.com/?q=SMG+Goat+Poultry+Farm"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
            >
              Get Directions
            </a>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.895325437508!2d78.1450479!3d12.119313999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac17006aa31ed7%3A0x3398232958761df6!2sSMG%20Goat%20Poultry%20farm!5e0!3m2!1sen!2sin!4v1781022639017!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="SMG Goat Poultry Farm Location"
          ></iframe>

        </div>

      </div>
    </section>
  );
}

export default Location;