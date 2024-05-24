const InfoBar = () => {
  return (
    <>
      <div
        className="bg-cover bg-center relative h-screen md:h-96 w-full flex justify-center items-center" // Altura total da tela no mobile, menor no desktop
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
          <div className="flex items-center bg-blue-custom w-full md:w-auto justify-center">
            <div>
              <p className="text-lg md:text-xl sm:text-2xl font-semibold text-white py-2 md:py-3 px-4 md:px-6 rounded-full">
                + 2.000
              </p>
              <p className="text-lg md:text-xl sm:text-2xl font-bold text-white py-2 md:py-3 px-4 md:px-6 rounded-full">
                OBRAS EXECUTADAS
              </p>
            </div>
          </div>

          <div className="flex items-center bg-blue-custom w-full md:w-auto justify-center">
            <div>
              <p className="text-lg md:text-xl sm:text-2xl font-semibold text-white py-2 md:py-3 px-4 md:px-6 rounded-full">
                + 100
              </p>
              <p className="text-lg md:text-xl sm:text-2xl font-bold text-white py-2 md:py-3 px-4 md:px-6 rounded-full">
                COLABORADORES
              </p>
            </div>
          </div>

          <div className="flex items-center bg-blue-custom w-full md:w-auto justify-center">
            <div>
              <p className="text-lg md:text-xl sm:text-2xl font-semibold text-white py-2 md:py-3 px-4 md:px-6 rounded-full">
                + 32
              </p>
              <p className="text-lg md:text-xl sm:text-2xl font-bold text-white py-2 md:py-3 px-4 md:px-6 rounded-full">
                ANOS NO RAMO
              </p>
            </div>
          </div>

          <div className="flex items-center bg-blue-custom w-full md:w-auto justify-center">
            <div>
              <p className="text-lg md:text-xl sm:text-2xl font-semibold text-white py-2 md:py-3 px-4 md:px-6 rounded-full">
                NOVAS
              </p>
              <p className="text-lg md:text-xl sm:text-2xl font-bold text-white py-2 md:py-3 px-4 md:px-6 rounded-full">
                TECNOLOGIAS
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background-custom p-4 md:py-6 flex flex-col justify-center items-center mb-6 md:mb-8 mt-6 md:mt-8">
        <div className="mb-4 md:mb-6 text-center text-base md:text-lg">
          Veja alguns cases de grandes obras realizadas.
        </div>

        <button className="bg-blue-custom text-white py-2 px-4 rounded hover:bg-blue-700">
          Cases
        </button>
      </div>

      <section className="bg-blue-custom p-4 md:p-6 flex flex-col justify-center items-center relative mb-6 md:mb-8 mt-6 md:mt-8">
        <div className="max-w-lg text-center relative">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
            MAIS DE 32 ANOS NO MERCADO
          </h4>
          <p className="text-base md:text-lg text-white italic">
            Conquistar a todo momento a confiança do mercado oferecendo serviço
            de excelência é uma tarefa árdua que buscamos diariamente com
            engajamento, comprometimento e postura ética profissional de todos
            os colaboradores que compõe a Repinte.
          </p>
          <p className="text-base md:text-lg text-white italic absolute right-0 ml-4 mb-4">
            Eng. Paulo Ramalho
          </p>
        </div>
      </section>
    </>
  );
};

export default InfoBar;
