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
    appendDots: (dots: any) => (
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
            src="/banner01.jpeg"
            alt="Logo"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            loading="lazy"
            className="w-full h-full"
          />
          <div className="absolute inset-0 "></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            {/* Conteúdo do slide */}
          </div>
        </div>
        <div className="relative overflow-hidden h-screen w-screen">
          <Image
            src="/banner02.jpeg"
            alt="Logo"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            loading="lazy"
            className="w-full h-full"
          />
          <div className="absolute inset-0 "></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            {/* Conteúdo do slide */}
          </div>
        </div>
        <div className="relative overflow-hidden h-screen w-screen">
          <Image
            src="/banner03.jpeg"
            alt="Logo"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            loading="lazy"
            className="w-full h-full"
          />
          <div className="absolute inset-0 "></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            {/* Conteúdo do slide */}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
