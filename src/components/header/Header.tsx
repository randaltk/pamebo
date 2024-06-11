"use client";

import { useState } from "react";
import { FaBars, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-background-custom p-2 shadow-md w-full">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between px-2">
        <div className="flex items-center space-x-6">
          <Link href="/" aria-label="Go to the homepage">
            <Image
              src="/logopamebo.jpeg"
              alt="Logo"
              width={270}
              height={200}
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="cursor-pointer ml-[-20px]" 
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" aria-label="Go to the homepage">
            <span className="text-lg text-red-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md">
              HOME
            </span>
          </Link>
          <Link href="/servicos" aria-label="Go to the services page">
            <span className="text-lg text-red-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md">
              SERVIÇOS
            </span>
          </Link>
          <Link href="/obras" aria-label="Go to the projects page">
            <span className="text-lg text-red-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md">
              OBRAS
            </span>
          </Link>
          <Link href="/contato" aria-label="Go to the contact page">
            <span className="text-lg text-red-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md">
              CONTATO
            </span>
          </Link>
        </div>
        <div className="flex hidden lg:flex items-center space-x-4">
          <Link
            href="https://wa.me/5511997034509"
            target="_blank"
            aria-label="Contact on WhatsApp"
            className="flex items-center space-x-1"
          >
            <FaWhatsapp className="text-gray-700 text-lg cursor-pointer" />
            <span className="text-gray-700 text-xl">997034509</span>
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
              <FaWhatsapp className="text-gray-700 text-lg cursor-pointer" />
            </Link>
          </div>
          <Link href="/" aria-label="Go to the homepage">
            <span className="text-lg text-red-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              HOME
            </span>
          </Link>
          <Link href="/servicos" aria-label="Go to the services page">
            <span className="text-lg text-red-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              SERVIÇOS
            </span>
          </Link>
          <Link href="/obras" aria-label="Go to the projects page">
            <span className="text-lg text-red-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              OBRAS
            </span>
          </Link>
          <Link href="/contato" aria-label="Go to the contact page">
            <span className="text-lg text-red-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
              CONTATO
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
