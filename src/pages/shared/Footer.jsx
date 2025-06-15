import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-900 to-blue-900 p-6 text-gray-400 ">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-secondary">📚 BookVerse</h2>
          <p className="mt-2 text-sm">
            A smart solution for managing your reading, borrowing, and learning — all in one place.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a className="link link-hover" href="/">Home</a></li>
            <li><a className="link link-hover" href="/allBook">All Books</a></li>
            <li><a className="link link-hover" href="/addBook">Add Book</a></li>
            <li><a className="link link-hover" href="/my-orders">Borrowed Books</a></li>
          </ul>
        </div>

        {/* Section 3: Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +880 1234-567890</p>
            <p className="flex items-center gap-2"><MdEmail /> support@bookverse.com</p>
          </div>

          <div className="mt-4 flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t py-4 text-sm">
        © {new Date().getFullYear()} BookVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
