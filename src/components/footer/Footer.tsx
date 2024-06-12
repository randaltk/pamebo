import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="mb-8 md:mb-0">
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

        <div className="flex flex-col md:flex-row md:ml-16 gap-8 flex-1 justify-between">
          <div className="ml-8 mr-8">
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul>
              <li className="mb-2">
                <Link href="/" legacyBehavior>
                  <a aria-label="Go to the homepage">Home</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/servicos" legacyBehavior>
                  <a aria-label="Go to the services page">Serviços</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/obras" legacyBehavior>
                  <a aria-label="Go to the projects page">Obras</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contato" legacyBehavior>
                  <a aria-label="Go to the contact page">Contato</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="ml-8 mr-8">
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <ul>
              <li className="mb-2">
                <a
                  href="https://wa.me/5511997034509"
                  target="_blank"
                  aria-label="Go to the WhatsApp page"
                  className="flex items-center"
                >
                  <AiOutlineWhatsApp className="inline-block mr-2 text-lg text-green-500" />
                  WhatsApp
                </a>
              </li>
              {/* <li className="mb-2">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  aria-label="Go to the Instagram page"
                  className="flex items-center"
                >
                  <FaInstagram className="inline-block mr-2 text-lg text-pink-500" />
                  Instagram
                </a>
              </li> */}
            </ul>
          </div>

          <div className="ml-8 mr-8">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul>
              <li className="mb-2">
                <a href="tel:+5511997034509" className="flex items-center">
                  <AiOutlinePhone className="mr-2 text-lg" />
                  (11) 2275-7514
                </a>
              </li>
              <li className="mb-2">
                <a href="mailto:orcamentos@pamebopinturas.com.br" className="flex items-center">
                  <AiOutlineMail className="mr-2 text-lg" />
                  orcamentos@pamebopinturas.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
