import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      const root = document.getElementById("root");
      if (root) root.scrollTop = 0;
    };

    // Fire immediately
    scrollToTop();

    // Fire after React finishes paint/layout
    const timeoutId = setTimeout(scrollToTop, 150);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
