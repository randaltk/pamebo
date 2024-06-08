"use client";

import Link from "next/link";
import products from "../../app/data/products.json";
import Head from "next/head";
import PageBanner from "../pagebanner/PageBanner";

const ProductsList = () => {
  return (
    <>
      <PageBanner src="/pagebanners/2.png" alt="Contato Banner" />

      <div className="container mx-auto mt-10">
        <Head>
          <title>Obras</title>
        </Head>
        <h2 className="text-4xl font-bold mb-4 text-center">Obras</h2>
        <hr className="border-t-2 border-red-custom mx-auto w-1/6 mb-12" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <li
              key={product.id}
              className="mb-8 bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-xl font-semibold mb-2">{product.name}</p>
                  <p className="text-pink-custom text-lg font-bold">
                    {product.neighborhood}
                  </p>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <Link
                    aria-label="Go to the product details page"
                    href={`/obras/update?id=${product.id}&name=${product.name}&image=${product.image}&neighborhood=${product.neighborhood}&description=${product.description}&link=${product.link}`}
                  >
                    <button
                      aria-label="Visualizar"
                      className="bg-red-custom text-white px-6 py-2 rounded-md hover:bg-red-800"
                    >
                      Veja mais {">"}
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsList;
