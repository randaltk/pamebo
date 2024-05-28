import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="py-12 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: "url('/servicos/1.png')",
            }}
          ></div>
          <div className="p-4">
            <h1 className="text-gray-900 font-bold text-2xl">
              Pintura de paredes e teto em geral
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              Benefícios e impactos para qualquer prédio
            </p>
            <div className="flex items-center justify-between mt-4">
              <Link href="/servicos" legacyBehavior>
                <a className="px-4 py-2 bg-blue-custom text-white text-sm font-bold uppercase rounded hover:bg-blue-700">
                  Leia mais
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: "url('servicos/8.png')",
            }}
          ></div>
          <div className="p-4">
            <h1 className="text-gray-900 font-bold text-2xl">
              Restauração de superfícies
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              Benefícios e impactos para qualquer prédio
            </p>
            <div className="flex items-center justify-between mt-4">
              <Link href="/servicos" legacyBehavior>
                <a className="px-4 py-2 bg-blue-custom text-white text-sm font-bold uppercase rounded hover:bg-blue-700">
                  Leia mais
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="h-48 bg-cover bg-center"
            style={{
              backgroundImage: "url('servicos/11.png')",
            }}
          ></div>
          <div className="p-4">
            <h1 className="text-gray-900 font-bold text-2xl">
              Lavagem e limpeza de fachada
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              Benefícios e impactos para qualquer prédio
            </p>
            <div className="flex items-center justify-between mt-4">
              <Link href="/servicos" legacyBehavior>
                <a className="px-4 py-2 bg-blue-custom text-white text-sm font-bold uppercase rounded hover:bg-blue-700">
                  Leia mais
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
