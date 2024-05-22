"use client"
import { useSearchParams } from "next/navigation";

const BuildingDetail = () => {
  const searchParams = useSearchParams();

  const idParam = searchParams.get("id");
  const nameParam = searchParams.get("name");
  const imgParam = searchParams.get("image");
  const locationParam = searchParams.get("location");
  const priceParam = searchParams.get("neighborhood");
  const sizeParam = searchParams.get("size");
  const descriptionParam = searchParams.get("description");

  return (
    <div className="container mx-auto mt-8 mb-10">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-md shadow-md flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:flex-shrink-0 lg:order-1">
          <img
            src={imgParam!}
            alt={nameParam || "Image"}
            className="w-full h-full object-cover mb-8 lg:mb-0"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 lg:order-1">
          <h2 className="text-2xl font-semibold mb-4">{nameParam}</h2>
     
          {descriptionParam && (
            <div className="mb-6">
              <p className="text-gray-700">Descrição:</p>
              <p>{descriptionParam}</p>
            </div>
          )}
          {/* {priceParam && (
            <p className="text-gray-700 mb-6">Preço: R$ {priceParam}</p>
          )} */}
          {/* <a
            href={`/#`} // Coloque a URL correta aqui
            className="block text-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Comprar
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default BuildingDetail;
