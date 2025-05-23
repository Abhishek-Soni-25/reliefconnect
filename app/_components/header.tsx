"use client"

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl px-6">
          <nav className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-2xl font-bold text-blue-600"
              >
                <i className="fas fa-hands-helping text-3xl"></i>
                <span className="pl-3">ReliefConnect</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link
                  href="/how-it-works"
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/volunteer"
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/emergency-map"
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Emergency Map
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/signup_volunteer/index.html"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 pb-6">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/how-it-works"
                    className="block font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/volunteer"
                    className="block font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="block font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/emergency-map"
                    className="block font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    Emergency Map
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/signup_volunteer/index.html"
                  className="inline-block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
