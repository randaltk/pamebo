import Link from 'next/link';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const WhatsAppIcon = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        href="https://wa.me/5511997034509"
        target="_blank"
        aria-label="Go to the WhatsApp page"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-colors"
      >
        <AiOutlineWhatsApp className="text-4xl" />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
