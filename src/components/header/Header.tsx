"use client";

import { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-background-custom p-4 shadow-md">
      <div className="max-w-screen-lg mx-auto">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/" aria-label="Go to the homepage">
              <Image
                src="/logopamebo.jpeg"
                alt="Logo"
                width={"200"}
                height={"200"}
                objectFit="cover"
                objectPosition="bottom"
                loading="lazy"
            
              />
            </Link>
          </div>

          <div className="lg:hidden">
            <button aria-label="toggle mobile" onClick={toggleMobileMenu}>
              <FaBars className="text-gray-500" />
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-9 ml-4">
            <Link href="/" aria-label="Go to the favorites page">
              <FaInstagram className="text-gray-700 text-2xl cursor-pointer" />
            </Link>
            <FaFacebook className="text-gray-700 text-2xl cursor-pointer" />
            <FaLinkedin className="text-gray-700 text-2xl cursor-pointer" />
          </div>
        </div>

        <div className="hidden lg:flex justify-center border-t   mt-3 pt-4">
          <Link href="/" aria-label="Go to the homepage">
            <span className="text-gray-700 hover:text-gray-900">HOME</span>
          </Link>

          <div className="border-l mx-2 h-4"></div>
          <Link href="/servicos" aria-label="Go to the products page">
            <span className="text-gray-700 hover:text-gray-900">SERVIÇOS</span>
          </Link>
          <div className="border-l mx-2 h-4"></div>
          <Link href="/obras" aria-label="Go to the products page">
            <span className="text-gray-700 hover:text-gray-900">OBRAS</span>
          </Link>
          <div className="border-l mx-2 h-4"></div>
          <Link href="/contato" aria-label="Go to the products page">
            <span className="text-gray-700 hover:text-gray-900">CONTATO</span>
          </Link>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col items-center mt-2 pt-4">
            <div className="flex space-x-6 mb-5">
              <Link href="/favorites" aria-label="Go to the favorites page">
                <FaInstagram className="text-gray-700 text-2xl cursor-pointer" />
              </Link>
              <FaFacebook className="text-gray-700 text-2xl cursor-pointer" />
              <FaLinkedin className="text-gray-700 text-2xl cursor-pointer" />
            </div>

            <Link href="/" aria-label="Go to the homepage">
              <span className="text-gray-700 hover:text-gray-900">HOME</span>
            </Link>
            <div className="border-l mx-2 h-4"></div>
            <Link href="/servicos" aria-label="Go to the products page">
              <span className="text-gray-700 hover:text-gray-900">
                SERVIÇOS
              </span>
            </Link>
            <div className="border-l mx-2 h-4"></div>
            <Link href="/obras" aria-label="Go to the products page">
              <span className="text-gray-700 hover:text-gray-900">OBRAS</span>
            </Link>
            <div className="border-l mx-2 h-4"></div>
            <Link href="/contato" aria-label="Go to the products page">
              <span className="text-gray-700 hover:text-gray-900">CONTATO</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
