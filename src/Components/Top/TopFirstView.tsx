import { useState } from "react";
import { TopKv, Logo, Tophamburger } from "../../Images";
import { Link } from "react-router-dom";

const TopFirstView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 背景 */}
      <img
        src={TopKv}
        alt="10°cafe"
        className="absolute inset-0 w-full h-full  object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* ===== ヘッダー ===== */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#F6F4EF]">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center">
          
          {/* ロゴ（スマホ中央） */}
          <div className="flex-1 flex justify-center m  md:justify-start">
            <Link to="/">
              <img src={Logo} alt="logo" className="pl-[40px] h-12" />
            </Link>
          </div>

          {/* PCメニュー */}
          <ul className="hidden md:flex gap-8 text-sm text-black">
            <li>
              <Link
                  to="/firstfloor"
                  className="pb-1 border-b border-transparent hover:border-black transition"
                >
                  1F
              </Link>

            </li>
            <li>
              <Link
                  to="/secondfloor"
                  className="pb-1 border-b border-transparent hover:border-black transition"
                >
                  2F
              </Link>
            </li>
            <li>
                <Link
                  to="/coworkingspace"
                  className="pb-1 border-b border-transparent hover:border-black transition"
                >
                  COWORKING SPACE
              </Link>
              </li>
            <li>Coffee Beans</li>
            <li>RECRUIT</li>
            <li>CONTACT</li>
          </ul>

          {/* ハンバーガー */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-40 md:hidden ml-auto flex h-10 w-10 flex-col justify-center"
          >
            {/* 上 */}
            <span
              className={`absolute h-[2px] w-8 bg-black transition-all duration-300
              ${isOpen ? "rotate-45 top-1/2" : "top-2"}`}
            />
            {/* 中 */}
            <span
              className={`absolute h-[2px] w-6 bg-black transition-all duration-300 left-1
              ${isOpen ? "opacity-0" : "top-1/2"}`}
            />
            {/* 下 */}
            <span
              className={`absolute h-[2px] w-8 bg-black transition-all duration-300
              ${isOpen ? "-rotate-45 top-1/2" : "bottom-2"}`}
            />
          </button>
        </nav>

        {/* ===== スマホメニュー ===== */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#D8C7A9] overflow-hidden transition-all duration-300 rounded-b-2xl
          ${isOpen ? "max-h-206 py-6" : "max-h-0 py-0"}`}
        >
          <ul className="flex flex-col items-start gap-6 text-sm pl-[10%] ">
            <li>
              <Link to="/firstfloor" onClick={() => setIsOpen(false)} className="text-white font-bold">
                1F
              </Link>
            </li>
            <li>
              <Link to="/secondfloor" onClick={() => setIsOpen(false)} className="text-white font-bold">
                2F
              </Link>
            </li>
            <li>
              <Link to="/coworkingspace" onClick={() => setIsOpen(false)} className="text-white font-bold">
                COWORKING SPACE
              </Link>
            </li>
            <li>
              <Link to="/beans" onClick={() => setIsOpen(false)} className="text-white font-bold">
                Coffee Beans
              </Link>
            </li>
            <li>
              <Link to="/recruit" onClick={() => setIsOpen(false)} className="text-white font-bold">
                RECRUIT
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white font-bold">
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="flex justify-end">
            <img src={Tophamburger} 
              alt="ハンバーガーメニュー"
              className="w-[50%] h-[50%] "
              />
          </div>
        </div>
      </header>

      {/* ===== 中央テキスト ===== */}
      <div className="relative z-20 flex h-full items-center justify-center text-white pt-10 md:pt-50">
        <div className="text-center px-6 -translate-y-15 md:-translate-y-16">
          <h1 className="font-impact text-6xl md:text-9xl font-extrabold">
            10°Cafe
          </h1>

          <p className="my-5 text-2xl md:text-4xl tracking-widest">高田馬場店</p>
          <p className="my-8 text-lg md:text-2xl">小さなきっかけ(10°)がそこに</p>
          <p className="text-sm md:text-lg">高田馬場駅から徒歩3分。「人生が、ほんのちょっと(10°)変わるきっかけ」が見つかるお店。</p>
          <p className="text-sm md:text-lg">【全席電源＆wifi完備】でリモートワークなどに最適です。 1.2F:カフェスペース</p>
          <p className="text-sm md:text-lg">3F:コワーキングスペースとなっており、個室でより集中できる空間をご利用いただけます。</p>
        </div>
      </div>
    </section>
  );
};

export default TopFirstView;