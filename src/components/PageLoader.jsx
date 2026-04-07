import { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Show loader right when pathname changes
    setLoading(true);
    setFade(false);

    // Provide a little bit more delay for the loader
    const fadeTimeout = setTimeout(() => {
      setFade(true); // Trigger CSS opacity transition to 0
    }, 600);

    // Completely remove from DOM after fade out transition finishes
    const closeTimeout = setTimeout(() => {
      setLoading(false);
    }, 900); // 800ms delay + 300ms fade transition

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(closeTimeout);
    };
  }, [pathname]);

  // If not loading at all, render nothing
  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div className="relative flex justify-center items-center w-24 h-24">
        {/* Outer fast spinning ring */}
        <div className="absolute inset-0 border-[4px] border-t-primary border-r-transparent border-b-secondary border-l-transparent rounded-full animate-[spin_1s_linear_infinite]"></div>
        {/* Middle reverse spinning ring */}
        <div className="absolute inset-3 border-[4px] border-t-transparent border-r-primary border-b-transparent border-l-secondary rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
        {/* Inner pulsing circle */}
        <div className="absolute inset-8 bg-primary rounded-full animate-pulse shadow-lg shadow-blue-300"></div>
      </div>
      {/* Loading Text */}
      <h2 className="mt-8 text-primary tracking-[0.3em] text-sm uppercase font-bold animate-pulse">
        Loading...
      </h2>
    </div>
  );
}
