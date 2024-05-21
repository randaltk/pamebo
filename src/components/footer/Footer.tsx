import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue-custom text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Logo */}
        {/* <div className="mb-6 md:mb-0">
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
        </div> */}
        {/* <div className="text-xl font-bold">
          <Link href="/" aria-label="Go to the homepage">
            <Image
              src="/logopamebo.jpeg"
              alt="Logo"
              width={220}
              height={220}
              objectFit="contain"
              objectPosition="center"
              loading="lazy"
            />
          </Link>
        </div> */}
        {/* Links, Redes Sociais, Informações e Pagamentos */}
        <div className="flex flex-col md:flex-row md:ml-16 gap-8">
          {/* Links Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Links</h4>
            <ul>
              <li>
                <a href="#" aria-label="Go to the homepage">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="#" aria-label="Go to the homepage">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" aria-label="Go to the homepage">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="# " aria-label="Go to the homepage">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Redes Sociais</h4>
            <ul>
              <li>
                <a
                  href="#"
                  aria-label="Go to the facebook page"
                  className="flex items-center"
                >
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Go to the  twitter page"
                  className="flex items-center"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Go to the instagram page"
                  className="flex items-center"
                >
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Contato</h4>
            <ul>
              <li>
                <a href="#">Para obras novas</a>
              </li>
              <li>
                <a href="#">orcamentos@pamebopinturas.com.br</a>
              </li>
              <li>
                <a href="#"> 5549-7175 ( São Paulo )</a>
              </li>
            </ul>
          </div>

          {/* Payment Section */}
          {/* <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Pagamentos</h4>
            <ul>
              <li>
                <a href="#" className="flex items-center">
                  <FaCcVisa className="text-2xl mr-2" />
                  Visa
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <FaCcMastercard className="text-2xl mr-2" /> Mastercard
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <FaCcAmex className="text-2xl mr-2" /> Amex
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* Contact and Address Section */}
      <div className="mt-8 border-t border-gray-600 pt-6 text-center">
        <p>
          <AiOutlineMail className="inline-block mr-2" />{" "}
          orcamentos@pamebopinturas.com.br
        </p>
        <p>
          <AiOutlinePhone className="inline-block mr-2" />
          5549-7175
        </p>
        <p> R. Pageú, 256 - Vila Mariana, São Paulo - SP, 04140-010</p>
      </div>
    </footer>
  );
};

export default Footer;
