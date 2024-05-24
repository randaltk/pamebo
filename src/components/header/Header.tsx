"use client"

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
          <div className="text-lg font-bold"> {/* Reduzindo o tamanho da fonte */}
            <Link href="/" aria-label="Go to the homepage">
              <Image
                src="/logopamebo.jpeg"
                alt="Logo"
                width={150} // Reduzindo o tamanho do logo
                height={150} // Reduzindo o tamanho do logo
                objectFit="cover"
                objectPosition="bottom"
                loading="lazy"
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="lg:hidden">
            <button aria-label="toggle mobile" onClick={toggleMobileMenu}>
              <FaBars className="text-gray-500" />
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-6 ml-4"> {/* Reduzindo o espaçamento entre os ícones */}
            <Link href="/" aria-label="Go to the favorites page">
              <FaInstagram className="text-gray-700 text-lg cursor-pointer" /> {/* Reduzindo o tamanho do ícone */}
            </Link>
            <FaFacebook className="text-gray-700 text-lg cursor-pointer" /> {/* Reduzindo o tamanho do ícone */}
            <FaLinkedin className="text-gray-700 text-lg cursor-pointer" /> {/* Reduzindo o tamanho do ícone */}
          </div>
        </div>

        <div className="hidden lg:flex justify-center border-t mt-3 pt-4 space-x-4"> {/* Reduzindo o espaçamento entre os links */}
          <Link href="/" aria-label="Go to the homepage">
            <span className="text-gray-700 hover:text-blue-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300"> {/* Reduzindo o padding dos links */}
              HOME
            </span>
          </Link>

          <Link href="/servicos" aria-label="Go to the products page">
            <span className="text-gray-700 hover:text-blue-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300"> {/* Reduzindo o padding dos links */}
              SERVIÇOS
            </span>
          </Link>
          <Link href="/obras" aria-label="Go to the products page">
            <span className="text-gray-700 hover:text-blue-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300"> {/* Reduzindo o padding dos links */}
              OBRAS
            </span>
          </Link>
          <Link href="/contato" aria-label="Go to the products page">
            <span className="text-gray-700 hover:text-blue-500 transition-colors duration-300 cursor-pointer px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300"> {/* Reduzindo o padding dos links */}
              CONTATO
            </span>
          </Link>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col items-center mt-2 pt-4 space-y-4"> {/* Reduzindo o espaçamento entre os links */}
            <div className="flex space-x-6 mb-3"> {/* Reduzindo o espaçamento entre os ícones */}
              <Link href="/" aria-label="Go to the favorites page">
                <FaInstagram className="text-gray-700 text-lg cursor-pointer hover:text-blue-500 transition-colors duration-300" /> {/* Reduzindo o tamanho do ícone */}
              </Link>
              <FaFacebook className="text-gray-700 text-lg cursor-pointer hover:text-blue-500 transition-colors duration-300" /> {/* Reduzindo o tamanho do ícone */}
              <FaLinkedin className="text-gray-700 text-lg cursor-pointer hover:text-blue-500 transition-colors duration-300" /> {/* Reduzindo o tamanho do ícone */}
            </div>

            <Link href="/" aria-label="Go to the homepage">
              <span className="text-gray-700 hover:text-blue-500 transition-colors duration-300">
                HOME
              </span>
            </Link>
            <Link href="/servicos" aria-label="Go to the products page">
              <span className="text-gray-700 hover:text-blue-500 transition-colors duration-300">
                SERVIÇOS
              </span>
            </Link>
            <Link href="/obras" aria-label="Go to the products page">
              <span className="text-gray-700 hover:text-blue-500 transition-colors duration-300">
                OBRAS
              </span>
            </Link>
            <Link href="/contato" aria-label="Go to the products page">
              <span className="text-gray-700 hover:text-blue-500 transition-colors duration-300">
                CONTATO
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;