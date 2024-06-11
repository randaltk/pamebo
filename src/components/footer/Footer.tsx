import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Link from "next/link";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-blue-custom text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 ajusteFino">
        <div className="flex flex-col md:flex-row md:ml-16 gap-8">
          <div className="mb-8 md:mb-0 ml-8 mr-8">
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul>
              <li>
                <Link href="/" legacyBehavior>
                  <a aria-label="Go to the homepage">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/servicos" legacyBehavior>
                  <a aria-label="Go to the homepage">Serviços</a>
                </Link>
              </li>
              <li>
                <Link href="/obras" legacyBehavior>
                  <a aria-label="Go to the homepage">Obras</a>
                </Link>
              </li>
              <li>
                <Link href="/contato" legacyBehavior>
                  <a href="# " aria-label="Go to the homepage">
                    Contato
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0 ajusteFino2 ml-8 mr-8">
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <ul>
            
              <li>
                <a
                  href="https://wa.me/5511997034509"
                  target="_blank"
                  aria-label="Go to the WhatsApp page"
                  className="flex items-center"
                >
                  <AiOutlineWhatsApp className="inline-block mr-2 text-lg" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0 ml-8 mr-8">
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul>
              <li>
                <a href="tel:+5511997034509" className="flex items-center">
                  <AiOutlinePhone className="mr-2 text-lg" />
                  (11) 2275-7514
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-6 text-center">
        <p className="text-base mb-4">
          <AiOutlineMail className="inline-block mr-2 text-lg" />{" "}
          orcamentos@pamebopinturas.com.br
        </p>
        <Link
          href="https://wa.me/5511997034509"
          target="_blank"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="text-gray-700 text-lg cursor-pointer" />
        </Link>
        {/* <p className="text-base">R. Pageú, 256 - Vila Mariana, São Paulo - SP, 04140-010</p> */}
      </div>
    </footer>
  );
};

export default Footer;
