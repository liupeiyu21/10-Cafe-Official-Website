import { useState } from "react";
import { FirstFloorKv, Logo, Tophamburger } from "../../Images";
import { Link } from "react-router-dom";

const FirstFloorFirstView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* ===== 背景画像 ===== */}
      <img
        src={FirstFloorKv}
        alt="10°cafe"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />


      {/*  白い枠線 */}

      <div className="pointer-events-none absolute top-[88px]  md:top-2  inset-3 md:inset-3 z-10 border border-white" />

      {/*  1F / 2F テキスト */}
  
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex w-full max-w-6xl justify-between px-12 text-white">
          <span className="text-6xl font-semibold tracking-widest">1F</span>
          <span className="text-6xl font-semibold tracking-widest">2F</span>
        </div>
      </div>


    </section>
  );
};

export default FirstFloorFirstView;
