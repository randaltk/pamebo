import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <Image
        src="/logopamebo.jpeg"
        alt="Logo"
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Pamebo</h2>
          <p className="text-sm md:text-lg">Soluções em pinturas</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
