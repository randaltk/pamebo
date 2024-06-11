"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full overflow-hidden relative">
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
      </div>
    </div>
  );
};

export default Banner;
