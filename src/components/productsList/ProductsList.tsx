"use client";

import Link from "next/link";
import { MdFavorite } from "react-icons/md";
import { useGlobalContext } from "../../context/GlobalContext";
import products from "../../app/data/products.json";

const ProductsList = () => {
  const { likedProducts, toggleLike } = useGlobalContext();

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-4 text-center">Serviços</h2>
      <hr className="border-t-2 border-red-custom mx-auto w-1/6 mb-12" />

      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-pink-custom text-lg font-bold">
            Página em construção
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
