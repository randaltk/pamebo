"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots:any) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        <div className="relative overflow-hidden h-screen w-screen">
          <Image
            src="/logopamebo.jpeg"
            alt="Logo"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            loading="lazy"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            {/* Conteúdo do slide */}
          </div>
        </div>
        <div className="relative overflow-hidden h-screen w-screen">
          <Image
            src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Logo"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            loading="lazy"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            {/* Conteúdo do slide */}
          </div>
        </div>
        <div className="relative overflow-hidden h-screen w-screen">
          <Image
            src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Logo"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            loading="lazy"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            {/* Conteúdo do slide */}
          </div>
        </div>
      </Slider>


    </div>
  );
};

export default Banner;
