"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Learn more about our journey, mission, and the team behind this project.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/about-image.jpg"
              alt="About Us Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              We are passionate about creating a platform that helps users solve real-world problems using cutting-edge technology. Our goal is to innovate, inspire, and build solutions that make an impact.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Our journey started with a simple idea and has evolved into a thriving project. Along the way, we've gathered a talented team of developers, designers, and visionaries dedicated to pushing the boundaries of what is possible.
            </p>

            {/* Highlight Section */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md mb-4">
              <p className="text-blue-600 dark:text-blue-200 font-semibold">
                "Innovation is at the heart of everything we do."
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
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
