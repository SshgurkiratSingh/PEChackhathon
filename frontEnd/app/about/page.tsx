"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-4 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg mx-auto p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
        
        {/* Section Title */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">
            About Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold">
            Learn more about our journey, mission, and the team behind this project.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center">
          
          {/* Text and Image Section */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
              Our Mission
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 font-medium">
              We are passionate about creating a platform that helps users solve 
              real-world problems using cutting-edge technology.
            </p>

            {/* Image Section */}
            <div className="mb-3">
              <Image
                src="/about-image.jpg"
                alt="About Us Image"
                width={250}
                height={180}
                className="rounded-lg shadow-lg"
              />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 font-medium">
              Our journey started with a simple idea and has evolved into a thriving project.
            </p>

            {/* Highlight Section */}
            <div className="p-2 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md mb-3">
              <p className="text-blue-600 dark:text-blue-200 font-semibold text-sm">
                "Innovation is at the heart of everything we do."
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-3">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 
                text-white font-semibold rounded-full shadow-lg hover:shadow-xl 
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