// src/components/ScrollProgress.jsx
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] pointer-events-none"
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      <div
        className="absolute top-0 h-full left-0 origin-left transition-transform duration-100"
        style={{
          background:
            "linear-gradient(90deg, rgb(91,168,255) 0%, rgb(231,231,231) 50%, rgb(232,192,120) 100%)",
          boxShadow:
            "rgba(91,168,255,0.65) 0px 0px 14px, rgba(232,192,120,0.4) 0px 0px 28px",
          width: "100%",
          transform: `scaleX(${progress / 100})`,
        }}
      />
      <span
        className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgb(255,255,255), rgba(91,168,255,0.4) 60%, transparent)",
          boxShadow:
            "rgba(91,168,255,0.9) 0px 0px 18px, rgba(232,192,120,0.6) 0px 0px 36px",
          left: `${progress}%`,
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;