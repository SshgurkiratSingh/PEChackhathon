"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on page load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8 flex justify-center items-center min-h-screen">
      <div
        className={`w-full max-w-lg mx-auto p-6 lg:p-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-shadow hover:shadow-2xl 
        transform transition-all duration-700 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        
        {/* Section Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base font-medium leading-relaxed">
            Discover our journey, mission, and the dedicated team behind this project.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center">
          
          {/* Text and Image Section */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-5 font-medium leading-relaxed">
              We are dedicated to building a platform that empowers users to tackle real-world challenges through innovative technology.
            </p>

            {/* Image Section */}
            <div className="mb-5">
              <Image
                src=""
                alt="About Us Image"
                width={250}
                height={180}
                className="rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-5 font-medium leading-relaxed">
              Our humble beginnings have grown into a dynamic project aimed at making a real difference.
            </p>

            {/* Highlight Section */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg shadow-md mb-5">
              <p className="text-blue-600 dark:text-blue-200 font-semibold text-base lg:text-lg">
                "Innovation drives everything we create."
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
                text-white font-semibold rounded-full shadow-lg hover:shadow-2xl 
                hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
