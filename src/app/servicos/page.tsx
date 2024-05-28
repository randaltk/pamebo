"use client";
import Head from "next/head";
import { useState } from "react";

const Servicos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService]: any = useState(null);

  const services = [
    {
      name: "Pintura de paredes e teto em geral",
      image:
        "servicos/1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo urna.",
    },
    {
      name: "Hidrojateamento",
      image:
      "servicos/13.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo urna.",
    },
    {
      name: "Restauração de superfícies",
      image:
        "servicos/8.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo urna.",
    },
    {
      name: "Lavagem e limpeza de fachada",
      image:
      "servicos/11.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo urna.",
    },
    {
      name: "Concreto Aparente",
      image:
      "servicos/5.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo urna.",
    },
    {
      name: "Tijolo Aparente",
      image:
        "servicos/7.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo urna.",
    },
    {
      name: "Superfície Metálica",
      image:
        "servicos/4.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo urna.",
    },
    {
      name: "Aplicação de Texturas",
      image:
      "servicos/8.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo urna.",
    },
    {
      name: "Teste de Percussão",
      image:
      "servicos/14.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec justo urna.",
    },
  ];

  const openModal = (service: any) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-10 mb-10">
      <Head>
        <title>Serviços</title>
      </Head>
      <h2 className="text-4xl font-bold mb-4 text-center">Serviços</h2>
      <hr className="border-t-2 border-red-custom mx-auto w-1/6 mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => openModal(service)}
          >
            <img
              src={service.image}
              alt={service.name}
              className="rounded-lg w-full mb-2"
            />
            <p className="text-lg font-semibold text-center">{service.name}</p>
          </div>
        ))}
      </div>

      {modalOpen && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 max-w-md rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{selectedService.name}</h3>
            <img
              src={selectedService.image}
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
  );
};

export default Servicos;
