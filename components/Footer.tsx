import Link from 'next/link';
import { Smartphone, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';
import logo from '../public/images/logo.jpg'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-700 to-black-600 rounded-lg flex items-center justify-center">
                <Image src={logo} width={200} height={200} alt='logo' />
              </div>
              <span className="text-xl font-bold">Mobile Gurus</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              On-Demand Mobile Repairs at Your Fingertips. Making Mobile Repairs More Convenient For Everyone across Nigeria and Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-300">+234 9034626287 / 9037979916</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-300">mobilegurusteam@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-300">11 Ekpenyong St, Uyo 520221, Akwa Ibom, Nigeria</span>
              </li>
            </ul>
           
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
           <div className="mt-4 mx-auto w-24 mb-2">
               <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/profile.php?id=61555544943975" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/mobile_gurus?igsh=MTV3anI2NXJsd25ieQ==" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://x.com/mobile_gurus" target="_blank"  className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/company/mobilegurus" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          <p className="text-gray-300">
            © 2024 Mobile Gurus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}