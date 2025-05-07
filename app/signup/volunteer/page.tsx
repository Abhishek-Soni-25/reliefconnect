import Image from "next/image";

import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default function Volunteer() {
  return (
    <>
      <Header />
      <div className="min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <section className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <Image
            src="/volunteer.png"
            alt="Volunteers working together"
            fill
            className="object-cover z-0"
            priority
          />
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Make a Difference Today</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join our community of 10,000+ volunteers creating positive change
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form Section */}
              <div className="form-section">
                <h2 className="text-3xl font-bold mb-8">
                  Volunteer Registration
                </h2>
                <form id="volunteerForm">
                  <div className="flex flex-col md:flex-row gap-5 mb-5">
                    <div className="flex-1">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 font-medium"
                      >
                        First Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="lastName"
                        className="block mb-2 font-medium"
                      >
                        Last Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="dob" className="block mb-2 font-medium">
                      Date of Birth <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      placeholder="yyyy / mm / dd"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="interests"
                      className="block mb-2 font-medium"
                    >
                      Areas of Interest
                    </label>
                    <select
                      id="interests"
                      name="interests"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 bg-white"
                    >
                      <option value="" disabled>
                        Select an area
                      </option>
                      <option value="disaster-relief">Disaster Relief</option>
                      <option value="food-distribution">
                        Food Distribution
                      </option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="environmental">Environmental</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="hours" className="block mb-2 font-medium">
                      Available Hours per Week
                    </label>
                    <input
                      type="text"
                      id="hours"
                      name="hours"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Emergency Phone Number <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="skills" className="block mb-2 font-medium">
                      Skills & Experience
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      rows={4}
                      placeholder="Tell us about your relevant skills and experience..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 resize-y min-h-32"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors mt-3"
                  >
                    Submit Application
                  </button>

                  <p className="text-gray-600 text-sm mt-4">
                    By submitting this form, you agree to our Terms of Service
                    and Privacy Policy.
                  </p>
                </form>
              </div>

              {/* Benefits Section */}
              <div className="benefits-section">
                <h2 className="text-3xl font-bold mb-8">
                  Why Volunteer With Us?
                </h2>

                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Make an Impact
                    </h3>
                    <p className="text-gray-600">
                      Create positive change in your community
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Gain Experience
                    </h3>
                    <p className="text-gray-600">
                      Develop new skills and knowledge
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="w-10 h-10 flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Join Community
                    </h3>
                    <p className="text-gray-600">
                      Connect with like-minded individuals
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-blue-600 mb-1">
                        5,000+
                      </h3>
                      <p className="text-gray-600">Active Volunteers</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-blue-600 mb-1">
                        200+
                      </h3>
                      <p className="text-gray-600">Partner Organizations</p>
                    </div>
                    <div className="text-center col-span-2 justify-self-center">
                      <h3 className="text-4xl font-bold text-blue-600 mb-1">
                        50,000+
                      </h3>
                      <p className="text-gray-600">Lives Impacted</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-5 mt-10">
                  <blockquote className="italic text-gray-700 mb-4 text-base">
                    "Volunteering with VolunteerHub has been an incredible
                    journey. I've met amazing people and made a real difference
                    in my community."
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      width={50}
                      height={50}
                      src="/volunteerImage.png"
                      alt="Sarah Johnson"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-gray-600 text-sm">
                        Volunteer since 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
