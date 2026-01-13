import { useState } from "react";
import { TopKv, Logo } from "../../Images";
import { Link } from "react-router-dom";

const TopFirstView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 背景 */}
      <img
        src={TopKv}
        alt="10°cafe"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* ===== ヘッダー ===== */}
      <header className="relative z-30 bg-white md:bg-transparent">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center">
          
          {/* ロゴ（スマホ中央） */}
          <div className="flex-1 flex justify-center  md:justify-start">
            <img src={Logo} alt="logo" className="pl-[40px] h-12" />
          </div>

          {/* PCメニュー */}
          <ul className="hidden md:flex gap-8 text-sm text-white">
            <li>
              <Link
                  to="/firstfloor"
                  className="pb-1 border-b border-transparent hover:border-white transition"
                >
                  1F
              </Link>

            </li>
            <li>
              <Link
                  to="/secondfloor"
                  className="pb-1 border-b border-transparent hover:border-white transition"
                >
                  2F
              </Link>
            </li>
            <li>
                <Link
                  to="/coworkingspace"
                  className="pb-1 border-b border-transparent hover:border-white transition"
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
          className={`md:hidden absolute top-full left-0 w-full bg-white overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 py-6" : "max-h-0 py-0"}`}
        >
          <ul className="flex flex-col items-center gap-6 text-sm">
            <li>
              <Link to="/firstfloor" onClick={() => setIsOpen(false)}>
                1F
              </Link>
            </li>
            <li>
              <Link to="/secondfloor" onClick={() => setIsOpen(false)}>
                2F
              </Link>
            </li>
            <li>
              <Link to="/coworkingspace" onClick={() => setIsOpen(false)}>
                COWORKING SPACE
              </Link>
            </li>
            <li>
              <Link to="/beans" onClick={() => setIsOpen(false)}>
                Coffee Beans
              </Link>
            </li>
            <li>
              <Link to="/recruit" onClick={() => setIsOpen(false)}>
                RECRUIT
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* ===== 中央テキスト ===== */}
      <div className="relative z-20 flex h-full items-center justify-center text-white">
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