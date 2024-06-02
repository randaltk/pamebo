"use client"

import { motion } from 'framer-motion';

const InfoBar = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const data = [
    { number: '+ 2.000', text: 'OBRAS EXECUTADAS' },
    { number: '+ 100', text: 'COLABORADORES' },
    { number: '+ 32', text: 'ANOS NO RAMO' },
    { number: 'NOVAS', text: 'TECNOLOGIAS' }
  ];

  return (
    <>
      <div
        className="bg-cover bg-center relative md:h-96 w-full flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://repinte.com.br/wp-content/uploads/2019/11/background-stats.jpg")',
        }}
      >
        <div
          className="bg-red-custom absolute h-48 w-48 rounded-full"
          style={{ zIndex: -1 }}
        ></div>
        <div className="bg-gray-200 bg-opacity-75 p-4 text-center shadow-md h-full flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
          {data.map((item, index) => (
            <motion.div
              key={item.text}
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center bg-blue-custom w-full md:w-auto justify-center p-4"
            >
              <div className="text-center">
                <p className="text-lg md:text-xl sm:text-2xl font-semibold text-white">
                  {item.number}
                </p>
                <p className="text-lg md:text-xl sm:text-2xl font-bold text-white">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoBar;
