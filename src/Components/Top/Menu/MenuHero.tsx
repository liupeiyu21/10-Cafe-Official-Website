// import { MenuHero as MenuHeroImage } from "../../../Images";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Tophamburger } from "../../../Images";

const MenuHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
                      to="/menu/drink"
                      className="pb-1 border-b border-transparent hover:border-white transition"
                    >
                      Menu
                  </Link>
                </li>
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
                <li>
                    <Link
                      to="/cafebeansexindex"
                      className="pb-1 border-b border-transparent hover:border-white transition"
                    >
                      COFFEE BEANS
                  </Link>
                </li>
                <li>
                    <Link
                      to="/recruitindex"
                      className="pb-1 border-b border-transparent hover:border-white transition"
                    >
                      RECRUIT
                  </Link>
                </li>
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
              className={`md:hidden absolute top-full left-0 w-full bg-[#D8C7A9] overflow-hidden transition-all duration-300 rounded-b-2xl
              ${isOpen ? "max-h-206 py-6" : "max-h-0 py-0"}`}
            >
              <ul className="flex flex-col items-start gap-6 text-sm pl-[10%]">
                <li>
                  <Link to="/menu/drink" onClick={() => setIsOpen(false)} className="text-white font-bold">
                    Menu
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/firstfloor" onClick={() => setIsOpen(false)} className="font-bold">
                    1F
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/secondfloor" onClick={() => setIsOpen(false)} className="font-bold">
                    2F
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/coworkingspace" onClick={() => setIsOpen(false)} className="font-bold">
                    COWORKING SPACE
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/beans" onClick={() => setIsOpen(false)} className="font-bold">
                    COFFEE BEABS
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/recruit" onClick={() => setIsOpen(false)} className="font-bold">
                    RECRUIT
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="font-bold">
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




    </>
  );
};

export default MenuHero;


