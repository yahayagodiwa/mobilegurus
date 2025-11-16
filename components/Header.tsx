'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import logo from '../public/images/logo.jpg'
import ThemeToggle from './Toggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-bg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-red-700 to-black rounded-lg flex items-center justify-center">
             <Image src={logo} width={200} height={200} alt='log' />
            </div>
            <span className="text-text text-xl font-bold text-gray-900">Mobile Gurus</span>
          </Link>
<ThemeToggle />
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 text-text hover:text-red-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 text-text hover:text-red-600 transition-colors">
            Our Services
            </Link>
            <Link href="/academy" className="text-gray-700 text-text hover:text-red-600 transition-colors">
              Academy
            </Link>
            <Link href="/technician" className="text-gray-700 text-text hover:text-red-600 transition-colors">
               Technicians
            </Link>
            <Link href="/about" className="text-gray-700 text-text hover:text-red-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 text-text hover:text-red-600 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block">
           <a href='https://wa.link/epc8ej' target='_blank'> 
            <Button className="bg-primary hover:bg-primary-600 text-white">
              Book Now
            </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t flex flex-col justify-center items-center">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
               Our Services
              </Link>
               <Link href="/academy" 
                onClick={() => setIsMenuOpen(false)}
               className="text-gray-700 hover:text-red-600 ">
              Academy
            </Link>

               <Link href="/technician" 
                onClick={() => setIsMenuOpen(false)}
               className="text-gray-700 hover:text-red-600 ">
              Technicians
            </Link>

              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}