"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleAutoSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    
  };

  const images = [
    "/banner1.webp",
    "/banner2.webp",
    "/banner3.webp",
    "/banner4.webp",
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center w-full"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1200}  // তোমার image এর max width
              height={600}  // তোমার image এর max height
              className="object-contain w-full h-auto"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
