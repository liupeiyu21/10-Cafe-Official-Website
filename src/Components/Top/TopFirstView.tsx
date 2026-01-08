import { useState } from "react";
import { TopKv, Logo } from "../../Images";
import { Link } from "react-router-dom";
const TopFirstView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // ① 画面サイズを持たせる
    <section className="relative aspect-[16/9] bg-cover bg-center">
      {/* ② 背景画像（absolute はここだけ） */}
      <img
        src={TopKv}
        alt="10°cafe"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ③ オーバーレイ（必要なら） */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ④ header / nav（通常フローに戻す） */}
      <div className="relative z-20">
        <nav className="w-full">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
            {/* ロゴ */}
            <img src={Logo} alt="10°cafe-logo" className="h-6" />

            {/* PCメニュー */}
            <ul className="hidden gap-8 text-sm md:flex">
              <Link to="/firstfloor" className="cursor-pointer">
                1F
              </Link>
              <li>2F</li>
              <li>COWORKING SPACE</li>
              <li>Coffee Beans</li>
              <li>RECRUIT</li>
              <li>CONTACT</li>
            </ul>

            {/* ハンバーガー（スマホ） */}
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
      </div>
    </section>
  );
};

export default TopFirstView;
