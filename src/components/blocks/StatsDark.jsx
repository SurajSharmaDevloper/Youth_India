import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 19, suffix: "+", label: "States" },
  { value: 207, suffix: "", label: "Districts" },
  { value: 32000, suffix: "+", label: "Villages" },
  { value: 41000000, suffix: "+", label: "Lives Touched" },
];

// Counter Hook
function useCounter(end, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, start]);

  return count;
}

export default function StatsDark() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Trigger animation on scroll
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

  // Format numbers (K, M)
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
    <section
      ref={ref}
      className="relative py-10 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>

      <div className="relative w-[90%] mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((item, index) => {
            const count = useCounter(item.value, visible);

            return (
              <div key={index} className="text-center relative">

                {/* Divider */}
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/10"></div>
                )}

                {/* Number */}
                <h2 className="text-3xl md:text-5xl font-bold text-neutral-300">
                  {formatNumber(count)}
                  {item.suffix}
                </h2>

                {/* Label */}
                <p className="mt-2 text-sm tracking-widest text-gray-400 uppercase">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}