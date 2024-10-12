"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hardcoded credentials for demo purposes (replace with real authentication logic)
  const validEmail = "user@example.com";
  const validPassword = "password123";

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication logic
    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid email or password. Please try again.");
      setIsAuthenticated(false);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md mx-auto p-6 lg:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* If authenticated, show welcome message */}
        {isAuthenticated ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Welcome!
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              You have successfully logged in.
            </p>
          </div>
        ) : (
          <>
            {/* Section Title */}
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                Login
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                Please enter your credentials to login.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300 rounded-lg">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Login
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
