import { useState } from "react";
import { TopKv, Logo } from "../../Images";

const TopFirstView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative">
      {/* 背景画像 */}
      <img
        src={TopKv}
        alt="10°cafe"
        className="absolute inset-0 "
      />

      {/* ナビ */}
      <nav className="absolute top-0 left-0 z-20 w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
          
          {/* ロゴ */}
          <img src={Logo} alt="10°cafe-logo" className="h-6" />

          {/* PCメニュー */}
          <ul className="hidden gap-8 text-sm md:flex">
            <li>1F</li>
            <li>2F</li>
            <li>COWORKING SPACE</li>
            <li>Coffee Beans</li>
            <li>RECRUIT</li>
            <li>CONTACT</li>
          </ul>

          {/* ハンバーガーボタン（スマホ） */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block h-[2px] w-6 bg-white"></span>
            <span className="block h-[2px] w-6 bg-white"></span>
            <span className="block h-[2px] w-6 bg-white"></span>
          </button>
        </div>

        {/* スマホメニュー */}
        {isOpen && (
          <div className="md:hidden bg-black/80 text-white">
            <ul className="flex flex-col items-center gap-6 py-6 text-sm">
              <li>1F</li>
              <li>2F</li>
              <li>COWORKING SPACE</li>
              <li>Coffee Beans</li>
              <li>RECRUIT</li>
              <li>CONTACT</li>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default TopFirstView;
