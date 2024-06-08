"use client";
import { useSearchParams } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BuildingDetail = () => {
  const searchParams = useSearchParams();

  const idParam = searchParams.get("id");
  const nameParam = searchParams.get("name");
  const imagesParam = JSON.parse(decodeURIComponent(searchParams.get("images") || "[]"));
  const locationParam = searchParams.get("location");
  const priceParam = searchParams.get("neighborhood");
  const sizeParam = searchParams.get("size");
  const descriptionParam = searchParams.get("description");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto mt-8 mb-10">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-md shadow-md flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:flex-shrink-0 lg:order-1">
          <Slider {...settings}>
            {imagesParam.map((img:any, index:any) => (
              <div key={index}>
                <img
                  src={img}
                  alt={nameParam || "Image"}
                  className="w-full h-full object-cover mb-8 lg:mb-0"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 lg:order-1">
          <h2 className="text-2xl font-semibold mb-4">{nameParam}</h2>
          {descriptionParam && (
            <div className="mb-6">
              <p className="text-gray-700"></p>
              <p>{descriptionParam}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildingDetail;
