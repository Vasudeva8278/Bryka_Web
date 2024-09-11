import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1,
    name: "Vasudev",
    text: "Biryani is a beloved dish known for its rich flavors, aromatic spices, and the delightful combination of ingredients. Here are some points that capture the essence of biryani:",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Harika",
    text: "Biryani is a beloved dish known for its rich flavors, aromatic spices, and the delightful combination of ingredients. Here are some points that capture the essence of biryani:",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Lahari",
    text: "Biryani is a beloved dish known for its rich flavors, aromatic spices, and the delightful combination of ingredients. Here are some points that capture the essence of biryani:",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="bg-black text-white py-10">
      <div className="container mx-auto" >
        <div className="text-center mb-6">
          <p>What our customers say</p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-xs text-gray-400">Sit & Taste it</p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="300" className="max-w-[600px] mx-auto">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-gray-800 relative">
                  <img className="rounded-full block mx-auto" src={data.img} alt={data.name} />
                  <p className="text-gray-400 text-sm">{data.text}</p>
                  <h1 className="text-xl font-bold text-white">{data.name}</h1>
                  <p className="text-white/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
