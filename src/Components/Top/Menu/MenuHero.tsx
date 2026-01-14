import { MenuHero as MenuHeroImage } from "../../../Images";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../Images";

const MenuHero = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <div className="">
          {/* ===== ヘッダー ===== */}
          <header className="fixed top-0 left-0 z-50 w-full bg-[#8C8745]">
            <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center">
              
              {/* ロゴ（スマホ中央） */}
              <div className="flex-1 flex justify-center  md:justify-start">
                <Link to="/"><img src={Logo} alt="logo" className="pl-[40px] h-12" /></Link>
                
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
                  className={`absolute h-[2px] w-8 bg-white transition-all duration-300
                  ${isOpen ? "rotate-45 top-1/2" : "top-2"}`}
                />
                {/* 中 */}
                <span
                  className={`absolute h-[2px] w-6 bg-white transition-all duration-300 left-1
                  ${isOpen ? "opacity-0" : "top-1/2"}`}
                />
                {/* 下 */}
                <span
                  className={`absolute h-[2px] w-8 bg-white transition-all duration-300
                  ${isOpen ? "-rotate-45 top-1/2" : "bottom-2"}`}
                />
              </button>
            </nav>

            {/* ===== スマホメニュー ===== */}
            <div
              className={`md:hidden absolute top-full left-0 w-full bg-[#030303] overflow-hidden transition-all duration-300
              ${isOpen ? "max-h-96 py-6" : "max-h-0 py-0"}`}
            >
              <ul className="flex flex-col items-center gap-6 text-sm">
                <li className="text-white">
                  <Link to="/firstfloor" onClick={() => setIsOpen(false)}>
                    1F
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/secondfloor" onClick={() => setIsOpen(false)}>
                    2F
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/coworkingspace" onClick={() => setIsOpen(false)}>
                    COWORKING SPACE
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/beans" onClick={() => setIsOpen(false)}>
                    Coffee Beans
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/recruit" onClick={() => setIsOpen(false)}>
                    RECRUIT
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </header>
      

        
            <section className="relative w-full overflow-hidden">
            
            {/* 背景画像（波形） */}
            <img
                src={MenuHeroImage}
                alt="menu hero background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* 文字レイヤー */}
            <div className="relative z-10 px-6 py-24 md:py-32">
                <h1 className="text-4xl md:text-6xl font-medium tracking-wide text-white">
                {title}
                </h1>
            </div>

            </section>
        </div>
    </>
  );
};

export default MenuHero;


