import WhatsAppIcon from "@/components/whatsappicon/WhatsAppIcon";
import Banner from "@/components/banner/Banner";
import Fornecedores from "@/components/fornecedores/Fornecedores";
import InfoBar from "@/components/infobar/Infobar";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import Link from "next/link";
import About from "@/components/about/About";

export default function Home() {
  return (
    <>
      <Banner />
      <InfoBar />
      <About />
      <ServicesSection />
      <Fornecedores />
      <WhatsAppIcon />
    </>
  );
}
