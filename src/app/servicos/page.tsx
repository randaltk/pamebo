"use client";
import { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import PageBanner from "@/components/pagebanner/PageBanner";

interface Service {
  name: string;
  image: string;
  description: string;
}

const Servicos: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      name: "Pintura interna predial residencial",
      image: "/servicos/1.png",
      description: "",
    },
    {
      name: "Hidrojateamento",
      image: "/servicos/13.png",
      description: "",
    },
    {
      name: "Restauração e pintura de fachadas",
      image: "/servicos/8.png",
      description: "",
    },
    {
      name: "Lavagem e limpeza de fachada",
      image: "/servicos/11.png",
      description: "",
    },
    {
      name: "Acabamentos especiais",
      image: "/servicos/5.png",
      description: "",
    },
    {
      name: "Tratamento e restauração de pastilhas",
      image: "/servicos/8.png",
      description: "",
    },
    {
      name: "Teste de Percussão",
      image: "/servicos/14.png",
      description: "",
    },
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Serviços</title>
      </Head>
      <div className="relative">
        <h2 className="text-4xl font-bold mb-4 text-center z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-lg p-4 shadow-md">
          Serviços
        </h2>

        <PageBanner src="/pagebanners/1.png" alt="Contato Banner" />
      </div>

      <div className="container mx-auto mt-10 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openModal(service)}
            >
              <Image
                src={service.image}
                alt={service.name}
                className="rounded-lg w-full mb-2"
                layout="responsive"
                width={100}
                height={100}
                objectFit="contain"
                objectPosition="center"
                loading="lazy"
              />
              <p className="text-lg font-semibold text-center">
                {service.name}
              </p>
            </div>
          ))}
        </div>
        {modalOpen && selectedService && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 max-w-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                {selectedService.name}
              </h3>
              <Image
                src={selectedService.image}
                width={500}
                height={500}
                alt={selectedService.name}
                className="rounded-lg mb-4"
              />
              <p>{selectedService.description}</p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Servicos;
