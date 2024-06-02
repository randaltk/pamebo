"use client"

import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white p-6 md:p-8 flex flex-col justify-center items-center mb-0 md:mb-0"
      >
        <div className="mb-6 text-center text-base md:text-lg">
          Veja alguns cases de grandes obras realizadas.
        </div>
        <Link href="/obras" legacyBehavior>
          <button className="bg-blue-custom text-white py-2 px-4 rounded hover:bg-blue-700">
            Cases
          </button>
        </Link>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-blue-custom py-6 md:py-8 flex flex-col justify-center items-center relative"
      >
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
      </motion.section>
    </>
  );
};

export default About;
