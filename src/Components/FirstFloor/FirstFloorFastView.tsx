import { useState } from "react";
import { FirstFloorKv, Logo } from "../../Images";
import { Link } from "react-router-dom";

const FirstFloorFirstView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // ① 画面サイズを持たせる
    <section className="relative aspect-[16/9] bg-cover bg-center">
      {/* ② 背景画像（absolute はここだけ） */}
      <img
        src={FirstFloorKv}
        alt="一階メインビジュアル"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* ③ オーバーレイ（必要なら） */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ✅ White border rectangle */}
      <div className="pointer-events-none absolute inset-2 z-10 border border-white" />

      {/* ✅ 1F / 2F text */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex w-full max-w-6xl justify-between px-12 text-white">
          <span className="text-6xl font-semibold tracking-widest">1F</span>
          <span className="text-6xl font-semibold tracking-widest">2F</span>
        </div>
      </div>

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
              className="flex flex-col gap-1 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="block h-[2px] w-6 bg-white"></span>
              <span className="block h-[2px] w-6 bg-white"></span>
              <span className="block h-[2px] w-6 bg-white"></span>
            </button>
          </div>

          {/* スマホメニュー */}
          {isOpen && (
            <div className="bg-black/80 text-white md:hidden">
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

export default FirstFloorFirstView;
