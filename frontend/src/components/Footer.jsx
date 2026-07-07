function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold">
            🐐 SMG Goat Farming
          </h2>

          <p className="mt-4 text-green-100">
            Healthy Goats, Natty Hens and Fresh Eggs
            raised through natural farming methods.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Contact Us
          </h3>

          <p>📞 +91 99409 94895</p>
          <p className="mt-2">📞 +91 99521 74540</p>

          <a
            href="https://wa.me/919940994895"
            target="_blank"
            rel="noreferrer"
            className="block mt-4 hover:text-green-300"
          >
            💬 WhatsApp Support
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Follow Us
          </h3>

          <a
            href="https://www.youtube.com/@smggoatfarming"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-red-300 transition"
          >
            📺 YouTube Channel
          </a>

          <a
            href="https://www.instagram.com/fitdul_21?igsh=MXF3dzh5cHA0cDZoNw=="
            target="_blank"
            rel="noreferrer"
            className="block mt-3 hover:text-pink-300 transition"
          >
            📸 Instagram
          </a>
        </div>

      </div>

      <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-200">
        © 2026 SMG Goat Farming. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;