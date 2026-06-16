function About() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-10">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-6 text-blue-800">
        About Us
      </h1>
      <p className="text-lg max-w-2xl text-center mb-10 text-gray-700">
        We are dedicated to building clean, reliable, and user‑friendly solutions.
        Our focus is on simplicity, trust, and timeless design principles.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Vision</h2>
          <p>
            To inspire confidence through technology that is simple and effective.
          </p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4 text-green-700">Mission</h2>
          <p>
            Deliver solutions that balance functionality with elegance.
          </p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-xl font-semibold mb-4 text-red-700">Values</h2>
          <p>
            Integrity, clarity, and consistency guide everything we do.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-600">
        © 2026 ReactClass Project. All rights reserved.
      </footer>
    </div>
  );
}

export default About;
