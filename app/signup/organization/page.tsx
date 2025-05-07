'use client'

import Image from "next/image";
import { useState, useRef } from "react";

import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export default function Organization() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Join Our Growing Network of Organizations
              </h2>
              <p className="text-lg text-gray-700">
                Create your organization profile and connect with opportunities
                worldwide
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-12 pt-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-600">
                    1000+
                  </span>
                  <span className="text-gray-600">Organizations</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-600">
                    Global
                  </span>
                  <span className="text-gray-600">Network</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-600">
                    Secure
                  </span>
                  <span className="text-gray-600">Platform</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/organization.png"
                  alt="Team collaboration with sticky notes"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="bg-white max-w-3xl mx-auto rounded-lg shadow-sm p-6 md:p-10">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Register Your Organization
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Enter your organization details to get started
          </p>

          <form>
            {/* Organization Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
              <div>
                <label
                  htmlFor="orgName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Organization Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="orgName"
                  placeholder="Enter organization name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Country/Region <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-no-repeat bg-right-4"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundSize: "16px",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              <div>
                <label
                  htmlFor="orgType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Organization Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="orgType"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-no-repeat bg-right-4"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundSize: "16px",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="nonprofit">Nonprofit</option>
                  <option value="forprofit">For-profit</option>
                  <option value="government">Government</option>
                  <option value="education">Educational Institution</option>
                  {/* Add more types as needed */}
                </select>
              </div>

              <div>
                <label
                  htmlFor="streetAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  placeholder="Enter street address"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  placeholder="https://"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="orgSize"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Organization Size <span className="text-red-500">*</span>
                </label>
                <select
                  id="orgSize"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-no-repeat bg-right-4"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundSize: "16px",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="" disabled>
                    Select size
                  </option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Postal Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="postalCode"
                  placeholder="Enter postal code"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="orgDescription"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Organization Description
              </label>
              <textarea
                id="orgDescription"
                placeholder="Brief description of your organization"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Organization Logo Upload Section */}
            <div className="mt-6">
              <label
                htmlFor="orgLogo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Organization Logo
              </label>
              <div className="border-2 border-gray-300 border-dashed rounded-md p-6 mt-1 flex flex-col items-center justify-center bg-gray-50 hover:border-blue-500 transition-colors">
                <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-full mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15V3M12 3L7 8M12 3L17 8"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 17V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V17"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 text-sm font-medium">
                  Drag and drop your logo here
                </p>
                <p className="text-gray-500 text-sm mt-2">or</p>
                <button
                  type="button"
                  onClick={handleBrowseClick}
                  className="mt-2 bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  Browse Files
                </button>
                <input
                  type="file"
                  id="logoFile"
                  ref={fileInputRef}
                  accept=".png,.jpg,.jpeg"
                  className="hidden"
                />
                <p className="text-gray-500 text-xs mt-4">
                  Maximum file size: 5MB (PNG, JPG)
                </p>
              </div>
            </div>

            {/* Primary Contact Information Section */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-6">
              Primary Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="workEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="workEmail"
                  placeholder="name@company.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter phone number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Account Setup Section */}
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-6">
              Account Setup
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Create Password"
                    required
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Create Organization
              </button>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
