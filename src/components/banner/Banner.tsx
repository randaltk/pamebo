"use client";
import Image from "next/image";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <Slider {...settings}>
      <div className="relative overflow-hidden h-screen">
        <Image
          src="/logopamebo.jpeg"
          alt="Logo"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          {/* Conteúdo do slide */}
        </div>
      </div>
      <div className="relative overflow-hidden h-screen">
        <Image
          src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Logo"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          {/* Conteúdo do slide */}
        </div>
      </div>
      <div className="relative overflow-hidden h-screen">
        <Image
          src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Logo"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          {/* Conteúdo do slide */}
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
