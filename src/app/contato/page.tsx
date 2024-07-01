"use client";

import PageBanner from "@/components/pagebanner/PageBanner";
import Head from "next/head";
import { useForm, ValidationError } from "@formspree/react";

const Contato = () => {
  const key: any = process.env.FORM;

  const [state, handleSubmit] = useForm(key);

  if (state.succeeded) {
    return (
      <>
        <div className="relative">
          <h2 className="text-4xl font-bold mb-4 text-center z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-lg p-4 shadow-md">
            Contato
          </h2>
          <PageBanner src="/pagebanners/3.png" alt="Contato Banner" />
        </div>

        <div className="container mx-auto mt-10">
          <p className="text-center text-2xl text-green-600 mt-4">
            Obrigado por entrar em contato!
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative">
        <h2 className="text-4xl font-bold mb-4 text-center z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-lg p-4 shadow-md">
          Contato
        </h2>
        <PageBanner src="/pagebanners/3.png" alt="Contato Banner" />
      </div>

      <div className="container mx-auto mt-10">
        <Head>
          <title>Contato</title>
        </Head>

        <div className="p-6 flex-grow flex flex-col justify-between">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                    Fale Conosco
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                    Entre em contato ou deixe sua solicitação ao lado para ser
                    atendido(a) durante o horário comercial.
                  </p>
                </div>

                <div className="flex flex-col p-6">
                  <label htmlFor="name" className="hidden">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nome"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />

                  <label htmlFor="lastname" className="hidden">
                    Sobrenome
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Sobrenome"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />

                  <label htmlFor="tel" className="hidden">
                    Telefone
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    name="tel"
                    placeholder="Telefone"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />

                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Seu Email"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <label htmlFor="message" className="hidden">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Sua Mensagem"
                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />

                  <button
                    type="submit"
                    className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                    disabled={state.submitting}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
