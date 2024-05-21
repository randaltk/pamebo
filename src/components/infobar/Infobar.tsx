const InfoBar = () => {
  return (
    <>
      <div
        className="bg-cover bg-center relative h-80 w-full flex justify-center items-center" // Adjust the height and width as needed
        style={{
          backgroundImage:
            'url("https://repinte.com.br/wp-content/uploads/2019/11/background-stats.jpg")',
        }}
      >
        <div
          className="bg-red-custom absolute h-48 w-48 rounded-full"
          style={{ zIndex: -1 }}
        ></div>
        <div className="bg-gray-200 bg-opacity-75 p-4 text-center shadow-md h-full flex justify-center items-center space-x-6">
          <div className="flex items-center bg-blue-custom">
            <div>
              <p className="text-xl sm:text-2xl font-semibold text-white py-3 px-6 rounded-full">
                + 2.000
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white  py-3 px-6 rounded-full">
                OBRAS EXECUTADAS
              </p>
            </div>
          </div>

          <div className="flex items-center bg-blue-custom">
            <div>
              <p className="text-xl sm:text-2xl font-semibold text-white py-3 px-6 rounded-full">
                + 100
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white  py-3 px-6 rounded-full">
                COLABORADORES
              </p>
            </div>
          </div>

          <div className="flex items-center bg-blue-custom">
            <div>
              <p className="text-xl sm:text-2xl font-semibold text-white py-3 px-6 rounded-full">
                + 20
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white  py-3 px-6 rounded-full">
                ANOS NO RAMO
              </p>
            </div>
          </div>

          <div className="flex items-center bg-blue-custom">
            <div>
              <p className="text-xl sm:text-2xl font-semibold text-white  py-3 px-6 rounded-full">
                NOVAS
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white py-3 px-6 rounded-full">
                TECNOLOGIAS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background-custom p-2 flex flex-col justify-center items-center">
        <div className="mb-8 text-center">
          Veja alguns cases de grandes obras realizadas.
        </div>

        <button className="bg-blue-custom text-white py-2 px-4 rounded hover:bg-blue-700">
          Cases
        </button>
      </div>

      <section className="bg-blue-custom p-8 flex flex-col justify-center items-center relative">
        <div className="max-w-lg text-center relative">
          <h4 className="text-3xl font-bold text-white mb-4">
            MAIS DE 20 ANOS NO MERCADO
          </h4>
          <p className="text-lg text-white italic">
            Conquistar a todo momento a confiança do mercado oferecendo serviço
            de excelência é uma tarefa árdua que buscamos diariamente com
            engajamento, comprometimento e postura ética profissional de todos
            os colaboradores que compõe a Repinte.
          </p>
          <p className="text-lg text-white italic absolute  right-0 ml-4 mb-4 ">
            Eng. Paulo Ramalho
          </p>
        </div>
      </section>
    </>
  );
};

export default InfoBar;
