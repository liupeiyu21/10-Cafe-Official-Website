import { useState  } from "react";
import { Link  } from "react-router-dom";
import { Logo, Tophamburger } from "../../Images"

const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* ===== ヘッダー ===== */}
            <header className="fixed top-0 left-0 z-50 w-full bg-[#F6F4EF]">
            <nav className="mx-auto flex max-w-6xl items-center px-6 py-4">
                
                {/* ロゴ */}
                <div className="flex flex-1 pl-[40px] justify-center md:justify-start">
                <Link to="/">
                    <img
                    src={Logo}
                    alt="logo"
                    className="h-12 md:pl-0"
                    />
                </Link>
                </div>

                {/* ===== PCメニュー ===== */}
                <ul className="hidden md:flex gap-8 text-sm text-black">
                <li>
                    <Link
                    to="/menu/drink"
                    className="pb-1 border-b border-transparent hover:border-black transition"
                    >
                    Menu
                    </Link>
                </li>
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
                <li>
                    <Link
                    to="/cafebeansexindex"
                    className="pb-1 border-b border-transparent hover:border-black transition"
                    >
                    COFFEE BEANS
                    </Link>
                </li>
                <li>
                    <Link
                    to="/recruitindex"
                    className="pb-1 border-b border-transparent hover:border-black transition"
                    >
                    RECRUIT
                    </Link>
                </li>
                <li>CONTACT</li>
                </ul>

                {/* ===== ハンバーガー（SP） ===== */}
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 ml-auto flex h-10 w-10 flex-col justify-center md:hidden"
                aria-label="menu"
                >
                {/* 上 */}
                <span
                    className={`absolute h-[2px] w-8 bg-black transition-all duration-300
                    ${isOpen ? "top-1/2 rotate-45" : "top-2"}`}
                />
                {/* 中 */}
                <span
                    className={`absolute left-1 h-[2px] w-6 bg-black transition-all duration-300
                    ${isOpen ? "opacity-0" : "top-1/2"}`}
                />
                {/* 下 */}
                <span
                    className={`absolute h-[2px] w-8 bg-black transition-all duration-300
                    ${isOpen ? "top-1/2 -rotate-45" : "bottom-2"}`}
                />
                </button>
            </nav>

            {/* ===== スマホメニュー ===== */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-[#D8C7A9]
                overflow-hidden transition-all duration-300 rounded-b-2xl
                ${isOpen ? "max-h-[520px] py-6" : "max-h-0 py-0"}`}
            >
                <ul className="flex flex-col gap-6 pl-[10%] text-sm">
                <li>
                    <Link
                    to="/menu/drink"
                    onClick={() => setIsOpen(false)}
                    className="font-bold text-white"
                    >
                    Menu
                    </Link>
                </li>
                <li>
                    <Link
                    to="/firstfloor"
                    onClick={() => setIsOpen(false)}
                    className="font-bold text-white"
                    >
                    1F
                    </Link>
                </li>
                <li>
                    <Link
                    to="/secondfloor"
                    onClick={() => setIsOpen(false)}
                    className="font-bold text-white"
                    >
                    2F
                    </Link>
                </li>
                <li>
                    <Link
                    to="/coworkingspace"
                    onClick={() => setIsOpen(false)}
                    className="font-bold text-white"
                    >
                    COWORKING SPACE
                    </Link>
                </li>
                <li>
                    <Link
                    to="/cafebeansexindex"
                    onClick={() => setIsOpen(false)}
                    className="font-bold text-white"
                    >
                    COFFEE BEANS
                    </Link>
                </li>
                <li>
                    <Link
                    to="/recruitindex"
                    onClick={() => setIsOpen(false)}
                    className="font-bold text-white"
                    >
                    RECRUIT
                    </Link>
                </li>
                <li>
                    <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="font-bold text-white"
                    >
                    CONTACT
                    </Link>
                </li>
                </ul>

                {/* 装飾画像 */}
                <div className="mt-6 flex justify-end pr-6">
                <img
                    src={Tophamburger}
                    alt="ハンバーガーメニュー装飾"
                    className="w-1/2"
                />
                </div>
            </div>
            </header>

        </>
    )
}

export default TopNav;