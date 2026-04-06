import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Simplest Salad Recipe ever",
    desc: "Lorem Ipsum is simply dummy text.",
    img: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg",
    user: "Aman Verma",
    location: "Delhi, India",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Best FastFood Ideas",
    desc: "Lorem Ipsum is simply dummy text.",
    img: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg",
    user: "Riya Sharma",
    location: "Mumbai, India",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "Healthy Salad",
    desc: "Lorem Ipsum is simply dummy text.",
    img: "https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg",
    user: "Karan Mehta",
    location: "Pune, India",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    title: "Green Veggies",
    desc: "Lorem Ipsum is simply dummy text.",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    user: "Neha Kapoor",
    location: "Jaipur, India",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function MultiCardSlider() {
  const sliderRef = useRef();
  const [index, setIndex] = useState(cards.length); // start from real start
  const [transition, setTransition] = useState(true);

  // clone for infinite loop
  const extended = [...cards, ...cards, ...cards];

  const getCardWidth = () => {
    if (window.innerWidth >= 1280) return 25; // 4
    if (window.innerWidth >= 1024) return 25; // 4
    if (window.innerWidth >= 768) return 33.33; // 3
    if (window.innerWidth >= 640) return 50; // 2
    return 100; // 1
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateSlider = () => {
    sliderRef.current.style.transition = transition
      ? "transform 0.5s ease"
      : "none";

    sliderRef.current.style.transform = `translateX(-${index * cardWidth
      }%)`;
  };

  useEffect(() => {
    updateSlider();
  }, [index, cardWidth]);

  const handleNext = () => {
    setIndex((prev) => prev + 1);
    setTransition(true);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
    setTransition(true);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleEnd = () => {
      if (index >= cards.length * 2) {
        setTransition(false);
        setIndex(cards.length);
      }
      if (index <= 0) {
        setTransition(false);
        setIndex(cards.length);
      }
    };

    slider.addEventListener("transitionend", handleEnd);
    return () => slider.removeEventListener("transitionend", handleEnd);
  }, [index]);

  return (
    <div className="w-full max-w-7xl mt-8 mx-auto relative overflow-hidden">


      {/* SLIDER */}
      <div ref={sliderRef} className="flex">

        {extended.map((card, i) => (
          <div
            key={i}
            className="p-3"
            style={{ flex: `0 0 ${cardWidth}%` }}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden">

              <img
                src={card.img}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-md mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {card.desc}
                </p>
              </div>

              {/* PROFILE */}
              <div className="flex items-center gap-3 p-3 bg-gray-100">
                <img
                  src={card.avatar}
                  className="w-9 h-9 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">
                    {card.user}
                  </p>
                  <p className="text-xs text-gray-500">
                    {card.location}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* CONTROLS */}
      <div className="mt-5 flex items-center justify-center gap-4">

        <button
          onClick={handlePrev}
          className="bg-black text-white p-2 rounded-full"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={handleNext}
          className="bg-black text-white p-2 rounded-full"
        >
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}