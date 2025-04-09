import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Vaidik-AI </h3>
            <p className="text-slate-400 mb-6">
              Revolutionizing education through AI-powered personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">API Documentation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Webinars</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Teacher Resources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-slate-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-400">support@Vaidik-AI </span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-slate-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-400">+1-800-555-0199</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-slate-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-400">123 Innovation Drive, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Vaidik-AI . All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;