"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "https://www.rkbengenharia.com.br/wp-content/uploads/2020/04/logo20.png",
  "https://www.rkbengenharia.com.br/wp-content/uploads/2020/04/logo01.png",
  "https://www.rkbengenharia.com.br/wp-content/uploads/2020/04/logo03.png",
  "https://www.rkbengenharia.com.br/wp-content/uploads/2020/04/logo19.png",
  "https://www.rkbengenharia.com.br/wp-content/uploads/2020/04/logo13.png",
  "https://www.rkbengenharia.com.br/wp-content/uploads/2020/04/logo08.png",
  "https://www.rkbengenharia.com.br/wp-content/uploads/2020/04/logo07.png",
];

// Duplicar a lista de imagens para criar um efeito de loop contínuo
const doubledImages = [...images, ...images];

const Fornecedores = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 2) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 2 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center mb-5">
      <h2 className="text-4xl font-bold mb-4 text-center">
        Fornecedores e parceiros
      </h2>

      <div className="relative flex items-center justify-center w-full md:w-4/5 lg:w-3/4 overflow-hidden ">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-2 bg-gray-300 rounded-full shadow-lg hover:bg-gray-400 focus:outline-none transition-colors"
        >
          ◀
        </button>
        <div className="relative flex items-center justify-center w-full md:w-4/5 lg:w-3/4 overflow-hidden py-4">
          <div className="flex justify-center items-center w-full space-x-2">
            {doubledImages.slice(index, index + 5).map((src, idx) => (
              <div key={idx} className="w-1/2 sm:w-1/5 flex-shrink-0">
                <div className="relative h-24 sm:h-36 w-full flex items-center justify-center overflow-hidden bg-white rounded-lg shadow-lg">
                  <Image
                    src={src}
                    alt={`Carousel Image ${idx}`}
                    layout="fill"
                    objectFit="contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 bg-gray-300 rounded-full shadow-lg hover:bg-gray-400 focus:outline-none transition-colors"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Fornecedores;
