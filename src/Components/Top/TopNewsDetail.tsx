import { useState,useEffect } from "react";
import { Logo, Tophamburger } from "../../Images";
import { Link, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { getNewsBySlug } from "../../../lib/sanity";
import TopSNSLinks from "./TopSNSLinks";
import TopFooter from "./TopFooter";

// import TopAccessSection from "./TopAccessSection";




const TopNewsDetail = () => {
      const [isOpen, setIsOpen] = useState(false);
      const { slug } = useParams();
      const [news, setNews] = useState<any>(null);

      useEffect(() => {
        if (!slug) return;
        getNewsBySlug(slug).then(setNews);
      }, [slug]);



      
    return (
      <>
        <section className="relative h-screen overflow-hidden">
          {/* ===== ヘッダー ===== */}
          <header className="fixed top-0 left-0 z-50 w-full bg-[#F6F4EF]">
            <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center">
              {/* ロゴ（スマホ中央） */}
              <div className="flex-1 flex justify-center  md:justify-start">
                <Link to="/"><img src={Logo} alt="logo" className="pl-[40px] h-12" /></Link> 
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
              <ul className="flex flex-col items-start gap-6 text-sm pl-[10%]">
                <li className="text-white">
                  <Link to="/firstfloor" onClick={() => setIsOpen(false)}className="text-white font-bold" >
                    1F
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/secondfloor" onClick={() => setIsOpen(false)} className="text-white font-bold">
                    2F
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/coworkingspace" onClick={() => setIsOpen(false)} className="text-white font-bold">
                    COWORKING SPACE
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/beans" onClick={() => setIsOpen(false)} className="text-white font-bold">
                    Coffee Beans
                  </Link>
                </li>
                <li className="text-white">
                  <Link to="/recruit" onClick={() => setIsOpen(false)} className="text-white font-bold">
                    RECRUIT
                  </Link>
                </li>
                <li className="text-white">
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
          
          <div>
            <h1 className="mt-32 text-center text-[#8C8745] text-3xl font-semibold">
              お知らせ
            </h1>

            {/* ===== 追加：お知らせ本文 ===== */}
            {news && (
              <div className="mt-10 mx-auto max-w-3xl px-6">
                {/* タイトル */}
                <h2 className="text-2xl font-semibold mb-2">
                  {news.title}
                </h2>

                {/* 日付 */}
                <p className="text-sm text-gray-400 mb-8">
                  {news.date}
                </p>

                {/* 本文 */}
                <div className="prose max-w-none">
                  <PortableText value={news.body} />
                </div>
                <Link to="/newslist">
                <button
                className="
                  mt-16
                  mx-auto
                  block
                  px-10
                  py-3
                  text-sm
                  tracking-widest
                  text-[#8C8745]
                  border
                  border-[#8C8745]
                  rounded-full
                  transition
                  duration-300
                  hover:bg-[#8C8745]
                  hover:text-white
                "
              >
                お知らせ一覧
              </button>
              </Link>
            </div>
            )}
        </div>
        </section> 
       <TopSNSLinks />
       <TopFooter />

        
    </>
    );
}

export default TopNewsDetail;