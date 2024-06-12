"use client";

import { useState } from "react";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-background-custom py-1 shadow-md w-full ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
        <div className="flex items-center">
          <Link href="/" aria-label="Go to the homepage">
            <Image
              src="https://res.cloudinary.com/aguadeira/image/upload/v1718223498/logopamebo_tssdje.jpg"
              alt="Logo"
              width={300}
              height={150}
              objectFit="contain"
              loading="lazy"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-center flex-1 space-x-6 font-semibold">
          <Link href="/" aria-label="Go to the homepage">
            <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md">
              HOME
            </span>
          </Link>

          <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md"></span>

          <Link href="/servicos" aria-label="Go to the services page">
            <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md">
              SERVIÇOS
            </span>
          </Link>

          <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md"></span>

          <Link href="/obras" aria-label="Go to the projects page">
            <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md">
              OBRAS
            </span>
          </Link>

          <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md"></span>

          <Link href="/contato" aria-label="Go to the contact page">
            <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md">
              CONTATO
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          <Link
            href="https://wa.me/5511997034509"
            target="_blank"
            aria-label="Contact on WhatsApp"
            className="flex items-center space-x-1"
          >
            <FaWhatsapp className="text-green-500 text-lg cursor-pointer" />
            <span className="font-semibold text-black-500 text-lg">997034509</span>
          </Link>
        </div>
        <div className="lg:hidden">
          <button aria-label="toggle mobile" onClick={toggleMobileMenu}>
            <FaBars className="text-gray-500" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center mt-2 pt-4 space-y-4">
          <div className="flex space-x-6 mb-3">
            <Link
              href="https://wa.me/5511997034509"
              target="_blank"
              aria-label="Contact on WhatsApp"
            >
              <FaWhatsapp className="text-green-500 text-lg cursor-pointer" />
            </Link>
          </div>
          <Link href="/" aria-label="Go to the homepage">
            <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer">
              HOME
            </span>
          </Link>
          <Link href="/servicos" aria-label="Go to the services page">
            <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer">
              SERVIÇOS
            </span>
          </Link>
          <Link href="/obras" aria-label="Go to the projects page">
            <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer">
              OBRAS
            </span>
          </Link>
          <Link href="/contato" aria-label="Go to the contact page">
            <span className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 cursor-pointer">
              CONTATO
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
