import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1735825764460-c5dec05d6253?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Brilliance IT"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side Text */}
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-blue-700">Who We Are</h2>
          <p className="text-lg mb-4">
            At <span className="font-semibold text-">Brilliance IT Jalgaon</span>, we are a team of passionate developers and designers committed to crafting digital solutions that matter. Based in the heart of Maharashtra, we blend creativity with technology to empower local businesses and startups.
          </p>
          <p className="text-lg mb-6">
            Our focus is on delivering smart, scalable, and secure applications that drive growth and efficiency. Whether you're building your first website or a complex system, we're here to bring your ideas to life.
          </p>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-700">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>🚀 Young & Dynamic Tech Talent</li>
              <li>🎯 Client-Focused & Solution-Oriented</li>
              <li>🧠 Innovation Meets Simplicity</li>
              <li>🌍 Local Roots, Global Vision</li>
            </ul>
          </div>

          <p className="mt-6 text-xl font-medium text-">
            Together, let's build brilliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
