import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const stats = [
  {
    id: 1,
    value: 19,
    suffix: "+",
    title: "States",
    desc: "Working across multiple states in India.",
  },
  {
    id: 2,
    value: 207,
    suffix: "",
    title: "Districts",
    desc: "Expanding impact at district level.",
  },
  {
    id: 3,
    value: 32000,
    suffix: "+",
    title: "Villages",
    desc: "Reaching rural communities effectively.",
  },
  {
    id: 4,
    value: 41000000,
    suffix: "+",
    title: "Lives Touched",
    desc: "Creating meaningful social impact.",
  },
];

function useCounter(end, startAnimation) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return count;
}

export default function CounterSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 bg-primary">
      <div className="max-w-7xl mx-auto ">
       

        <div className="grid grid-cols-2 mt-8 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const count = useCounter(item.value, visible);

            return (
              <article
                key={item.id}
                className="text-center bg-white p-4 rounded-xl hover:scale-105 transition duration-300"
              >


                {/* Counter */}
                <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold">
                  {count.toLocaleString()}
                  {item.suffix}
                </h2>

                {/* Title */}
                <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0061B0] to-blue-400 mt-1">
                  {item.title}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-500 mt-2">
                  {item.desc}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}