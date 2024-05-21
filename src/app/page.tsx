import Banner from "@/components/banner/Banner";
import InfoBar from "@/components/infobar/Infobar";


export default function Home() {
  return (
    <>
      <Banner />
      <InfoBar/>
      <div className="py-12 flex justify-center items-center">
        <div className="flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="w-1/2 bg-cover"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1682617326551-4749611516f6?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
          <div className="w-1/2 p-4">
            <h1 className="text-gray-900 font-bold text-3xl">
              Manutenção e Lavagem Predial
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              Benefícios e impactos para qualquer prédio
            </p>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="px-4 py-2 bg-blue-custom text-white text-sm font-bold uppercase rounded hover:bg-blue-700"
              >
                Leia mais
              </a>
            </div>
          </div>
        </div>
       
        <div className="flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden ml-4">
          <div
            className="w-1/2 bg-cover"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1682617326551-4749611516f6?q=80&w=2666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
          <div className="w-1/2 p-4">
            <h1 className="text-gray-900 font-bold text-3xl">
            Valorizando seu Imóvel com a Restauração
            </h1>
            <p className="mt-2 text-gray-600 text-lg">
              Benefícios e impactos para qualquer prédio
            </p>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="px-4 py-2 bg-blue-custom text-white text-sm font-bold uppercase rounded hover:bg-blue-700"
              >
                Leia mais
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
