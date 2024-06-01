import Banner from "@/components/banner/Banner";
import Fornecedores from "@/components/fornecedores/Fornecedores";
import InfoBar from "@/components/infobar/Infobar";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Banner />
      <InfoBar />
      <div className="bg-white p-6 md:p-8 flex flex-col justify-center items-center mb-0 md:mb-0">
        <div className="mb-6 text-center text-base md:text-lg">
          Veja alguns cases de grandes obras realizadas.
        </div>
        <Link href="/obras" legacyBehavior>
          <button className="bg-blue-custom text-white py-2 px-4 rounded hover:bg-blue-700">
            Cases
          </button>
        </Link>
      </div>

      <section className="bg-blue-custom py-6 md:py-8 flex flex-col justify-center items-center relative">
        <div className="max-w-lg text-center relative p-4 md:p-6">
          <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
            MAIS DE 32 ANOS NO MERCADO
          </h4>
          <p className="text-base md:text-lg text-white italic">
            Conquistar a todo momento a confiança do mercado oferecendo serviço
            de excelência é uma tarefa árdua que buscamos diariamente com
            engajamento, comprometimento e postura ética profissional de todos
            os colaboradores que compõe a Repinte.
          </p>
          <p className="text-base md:text-lg text-white italic mt-4">
            Eng. Paulo Ramalho
          </p>
        </div>
      </section>

      <ServicesSection />

      <Fornecedores />
    </>
  );
}
