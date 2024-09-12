import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1,
    name: "The Bhagavad Gita",
    text: "One of the most revered texts in Indian philosophy, The Bhagavad Gita is a 700-verse scripture that is part of the Indian epic, Mahabharata. It takes the form of a conversation between Prince Arjuna and the god Krishna, who serves as his charioteer. The book addresses the moral and philosophical dilemmas Arjuna faces on the battlefield, offering profound lessons on duty (dharma), righteousness, selflessness, and the paths to spiritual liberation. The Gita teaches the importance of performing one’s duty without attachment to the outcomes and has universal messages that resonate with readers seeking inner peace and purpose.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Autobiography of a Yogi",
    text: "This spiritual classic tells the life story of Paramahansa Yogananda, a revered yogi and spiritual teacher who played a key role in bringing Indian spirituality to the West. The book explores his childhood in India, his spiritual quests, and his encounters with other saints and spiritual leaders. It offers a deep exploration of yoga, meditation, and the power of spiritual practice. The book is filled with remarkable stories of Yogananda's experiences and insights, providing readers with practical lessons on living a spiritually centered life and achieving inner peace.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "The Guide",
    text: "The Guide is a beautifully written novel that explores the transformation of Raju, a tour guide who evolves into a spiritual leader. Set in the fictional town of Malgudi, this book delves into themes of love, ambition, and redemption. Initially driven by personal gain, Raju’s life takes a spiritual turn after a series of personal failures. The book touches on the complexity of human nature and the idea that one’s past actions don’t define their future, emphasizing the possibility of change and self-discovery.",
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
    
    <div
      data-aos="fade-up"
      data-aos-duration="300"
      className="bg-white text-black py-10"
    >
      
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <p className="text-lg font-semibold">What our customers want</p>

          <p className="text-xs text-gray-600">Suggestions</p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="max-w-[600px] mx-auto"
        >
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center p-4 mx-4 rounded-xl bg-gray-100 relative">
                 
                  <p className="text-gray-700 text-sm">{data.text}</p>
                  <h1 className="text-xl font-bold text-black">{data.name}</h1>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
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
