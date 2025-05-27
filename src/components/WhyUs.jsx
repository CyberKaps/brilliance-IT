import React from 'react';
import { GraduationCap, Wallet, Laptop, Headphones } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with hands-on experience in real-world projects.',
    },
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: 'Practical Learning',
      description: 'Our courses focus on skill-building with projects, quizzes, and real-time coding.',
    },
    {
      icon: <Wallet className="w-8 h-8 text-blue-600" />,
      title: 'Affordable Pricing',
      description: 'High-quality learning doesn’t have to be expensive. Get the best at a fair price.',
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: 'Ongoing Support',
      description: 'Get your doubts cleared with dedicated support and community Q&A.',
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20" id="why-us">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">Why Learn With Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
