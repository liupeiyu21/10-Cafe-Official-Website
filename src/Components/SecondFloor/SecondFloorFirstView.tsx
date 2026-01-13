import { useState } from "react";
import { FirstFloorKv, Logo, Tophamburger } from "../../Images";
import { Link } from "react-router-dom";


const SecondFloorFirstView = () => {
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

      {/* ===== ヘッダー ===== */}
      <header className="relative z-30 bg-white md:bg-transparent">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center">
          {/* ロゴ */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link to="/">
              <img src={Logo} alt="logo" className="pl-[40px] h-12" />
            </Link>
          </div>

          {/* PCメニュー */}
          <ul className="hidden md:flex gap-8 text-sm text-white">
            <li><Link to="/firstfloor" className="pb-1 border-b border-transparent hover:border-white transition">1F</Link></li>
            <li><Link to="/secondfloor" className="pb-1 border-b border-transparent hover:border-white transition">2F</Link></li>
            <li><Link to="/coworkingspace" className="pb-1 border-b border-transparent hover:border-white transition">COWORKING SPACE</Link></li>
            <li className="pb-1 border-b border-transparent hover:border-white transition">Coffee Beans</li>
            <li className="pb-1 border-b border-transparent hover:border-white transition">RECRUIT</li>
            <li className="pb-1 border-b border-transparent hover:border-white transition">CONTACT</li>
          </ul>

          {/* ハンバーガー */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-40 md:hidden ml-auto flex h-10 w-10 flex-col justify-center"
          >
            <span className={`absolute h-[2px] w-8 bg-black ${isOpen ? "rotate-45 top-1/2" : "top-2"}`} />
            <span className={`absolute h-[2px] w-6 bg-black left-1 ${isOpen ? "opacity-0" : "top-1/2"}`} />
            <span className={`absolute h-[2px] w-8 bg-black ${isOpen ? "-rotate-45 top-1/2" : "bottom-2"}`} />
          </button>
        </nav>

        {/* スマホメニュー */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#D8C7A9] overflow-hidden transition-all duration-300 rounded-b-2xl
          ${isOpen ? "max-h-206 py-6" : "max-h-0 py-0"}`}
        >
          <ul className="flex flex-col items-start gap-6 text-sm pl-[10%]">
            <li><Link to="/firstfloor" className="text-white font-bold">1F</Link></li>
            <li><Link to="/secondfloor" className="text-white font-bold">2F</Link></li>
            <li><Link to="/coworkingspace" className="text-white font-bold">COWORKING SPACE</Link></li>
            <li className="text-white font-bold">Coffee Beans</li>
            <li className="text-white font-bold">RECRUIT</li>
            <li className="text-white font-bold">CONTACT</li>
          </ul>

          <div className="flex justify-end pr-6 pt-6">
            <img src={Tophamburger} alt="" className="w-1/2" />
          </div>
        </div>
      </header>
    </section>
  );
};

export default SecondFloorFirstView;
