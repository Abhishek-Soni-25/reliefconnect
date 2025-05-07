import Image from "next/image";
import Link from "next/link";

import Header from "./_components/header";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="hero-text">
                <h1 className="text-4xl font-bold mb-6">
                  Connecting Heroes in Time of Crisis
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connect volunteers, NGOs, and resources during emergencies.
                  Make a real difference when communities need it most.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/signup/volunteer"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Join as Volunteer
                  </Link>
                  <Link
                    href="/signup/organization"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Register Organization
                  </Link>
                </div>
              </div>
              <div className="hero-image">
                <Image
                width={600}
                height={600}
                  src="/home.png"
                  alt="Emergency response team"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-2">
                  10,000+
                </h2>
                <p className="text-lg text-gray-600">Volunteers</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-2">500+</h2>
                <p className="text-lg text-gray-600">NGOs</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-2">
                  1,000+
                </h2>
                <p className="text-lg text-gray-600">Emergencies Handled</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-2">24/7</h2>
                <p className="text-lg text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Powerful Features for Emergency Response
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z"></path>
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Real-time Coordination
                </h3>
                <p className="text-gray-600">
                  Instant communication and response coordination between teams
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Resource Matching</h3>
                <p className="text-gray-600">
                  Efficiently match resources with immediate needs
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Emergency Alerts</h3>
                <p className="text-gray-600">
                  Quick dissemination of critical information
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Volunteer Management</h3>
                <p className="text-gray-600">
                  Streamlined volunteer registration and assignment
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Resource Tracking</h3>
                <p className="text-gray-600">
                  Real-time monitoring of supplies and equipment
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Impact Reports</h3>
                <p className="text-gray-600">
                  Comprehensive reporting and analytics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Active Emergencies Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Active Emergency Responses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold">Flood Relief</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    Urgent
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center mb-3">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Central Valley, CA
                  </p>
                  <p className="flex items-center mb-3">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17A3 3 0 015 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                    </svg>
                    Water, Food, Shelter
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                    234 Volunteers
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold">Wildfire Response</h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center mb-3">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Northern Region
                  </p>
                  <p className="flex items-center mb-3">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17A3 3 0 015 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                    </svg>
                    Medical, Transport
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                    156 Volunteers
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold">Hurricane Recovery</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Ongoing
                  </span>
                </div>
                <div className="p-6">
                  <p className="flex items-center mb-3">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Coastal Area
                  </p>
                  <p className="flex items-center mb-3">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17A3 3 0 015 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                        clipRule="evenodd"
                      ></path>
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                    </svg>
                    Construction, Supplies
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                    389 Volunteers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our network of emergency responders and help communities in
              need
            </p>
            <Link
              href="/signup/volunteer"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
