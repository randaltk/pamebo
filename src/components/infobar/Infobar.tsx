const InfoBar = () => {
  return (
    <>
      <div
        className="bg-cover bg-center relative md:h-96 w-full flex justify-center items-center" // Altura total da tela no mobile, menor no desktop
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
    </>
  );
};

export default InfoBar;
