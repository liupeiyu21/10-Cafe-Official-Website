import { Logo } from "../../Images";

const TopFooter = () => {
  return (
    <footer className="bg-[#F6F3EE]" >
      <div className="mx-auto max-w-6xl px-6 py-16">

        {/* ロゴ */}
        <div className="mb-10 flex justify-center">
          <img
            src={Logo}
            alt="10°CAFE"
            className="h-10"
          />
        </div>

        {/* ナビ */}
        <nav className="mb-12  md:flex">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm tracking-widest">
            <li className="hover:opacity-60 cursor-pointer">1F</li>
            <li className="hover:opacity-60 cursor-pointer">2F</li>
            <li className="hover:opacity-60 cursor-pointer">COWORKING SPACE</li>
            <li className="hover:opacity-60 cursor-pointer">Coffee Beans</li>
            <li className="hover:opacity-60 cursor-pointer">RECRUIT</li>
            <li className="hover:opacity-60 cursor-pointer">CONTACT US</li>
          </ul>
        </nav>

        {/* 下段 */}
        <div className="flex flex-col gap-4 border-t border-black/10 pt-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            〒171-0033 東京都豊島区高田3丁目12-8 03-6912-6109
          </p>
          <p>
            Copyright © 10°CAFE | 高田馬場 All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default TopFooter;
