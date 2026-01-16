import { Logo } from "../../Images";
import { Link } from "react-router-dom";

const TopFooter = () => {
  return (
    <footer className="bg-[#F6F3EE]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* ロゴ */}
        <div className="mb-12 flex justify-center">
          <Link to="/">
            <img src={Logo} alt="10°CAFE" className="h-12" />
          </Link>
        </div>

        {/* ナビ */}
        <nav className="mb-12 flex justify-center md:flex">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm tracking-widest">
            <li>
              <Link
                to="/menu/drink"
                className="pb-1 border-b border-transparent hover:border-b-3 hover:border-black transition"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/firstfloor"
                className="pb-1 border-b border-transparent hover:border-b-3 hover:border-black transition"
              >
                1F
              </Link>
            </li>
            <li>
              <Link
                to="/secondfloor"
                className="pb-1 border-b border-transparent hover:border-b-3 hover:border-black transition"
              >
                2F
              </Link>
            </li>
            <li>
              <Link
                to="/coworkingspace"
                className="pb-1 border-b border-transparent hover:border-b-3 hover:border-black transition"
              >
                COWORKING SPACE
              </Link>
            </li>
            <li>
              <Link
                to="/cafebeansexindex"
                className="pb-1 border-b border-transparent hover:border-b-3 hover:border-black transition"
              >
                COFFEE BEANS
              </Link>
            </li>
            <li>
              <Link
                to="/recruitindex"
                className="pb-1 border-b border-transparent hover:border-b-3 hover:border-black transition"
              >
                RECRUIT
              </Link>
            </li>
            <li className="hover:opacity-60 cursor-pointer">CONTACT US</li>
          </ul>
        </nav>

        {/* 下段 */}
        <div className="flex flex-col gap-4 border-t border-black/10 pt-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>〒171-0033 東京都豊島区高田3丁目12-8 03-6912-6109</p>
          <p>Copyright © 10°CAFE | 高田馬場 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default TopFooter;
