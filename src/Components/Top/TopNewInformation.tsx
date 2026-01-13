import { useState } from "react";
import { Logo } from "../../Images";
import { Link } from "react-router-dom";


const TopNewInformation = () => {
      const [isOpen, setIsOpen] = useState(false);
    return (
    <section className="relative h-screen overflow-hidden">

      <div className="absolute inset-0" />

      {/* ===== ヘッダー ===== */}
      <header className="relative z-30 bg-[#030303]">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center border-b-1 border-white">
          
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

      <div>
        <h1 className="mt-32 text-center text-[#8C8745] text-3xl font-semibold">お知らせ</h1>
        <p className="mt-8 mx-auto max-w-4xl px-6 text-center text-sm leading-7">
        </p>   
      </div>
    </section>
    );
}

export default TopNewInformation;