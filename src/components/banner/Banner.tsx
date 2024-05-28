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
        {/* Mobile and desktop versions of the first image */}
        <div className="relative overflow-hidden h-[40vh] sm:h-[60vh] md:h-[75vh] lg:h-screen">
          {/* Mobile version */}
          <div className="block md:hidden">
            <Image
              src="/banner01.jpeg"
              alt="Banner 1 Mobile"
              layout="fill"
              objectFit="cover"
              objectPosition="right"
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          {/* Desktop version */}
          <div className="hidden md:block">
            <Image
              src="/banner01.jpeg"
              alt="Banner 1 Desktop"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            {/* Conteúdo do slide */}
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative overflow-hidden h-[40vh] sm:h-[60vh] md:h-[75vh] lg:h-screen">
          <div className="relative h-full w-full">
            <Image
              src="/banner02.jpeg"
              alt="Banner 2"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            {/* Conteúdo do slide */}
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative overflow-hidden h-[40vh] sm:h-[60vh] md:h-[75vh] lg:h-screen">
          <div className="relative h-full w-full">
            <Image
              src="/banner03.jpeg"
              alt="Banner 3"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            {/* Conteúdo do slide */}
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
