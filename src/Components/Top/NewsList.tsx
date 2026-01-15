import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNewsList, getNewsCount } from "../../../lib/sanity";
import TopFooter from "./TopFooter";
import TopSNSLinks from "./TopSNSLinks";
import { Logo, Tophamburger } from "../../Images";


type NewsItem = {
  _id: string;
  title: string;
  date: string;
  slug: {
    current: string;
  };
};

const PER_PAGE = 10;

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 現在ページの記事取得
    getNewsList(page).then(setNews);

    // 総件数 → ページ数計算
    getNewsCount().then((count: number) => {
      setTotalPages(Math.ceil(count / PER_PAGE));
    });
  }, [page]);

  return (
    <>
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
                    Coffee Beans
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

      <section className="mx-auto max-w-4xl px-6 pt-24">
        {/* ===== タイトル ===== */}
        <div className="my-16 flex items-center gap-6 text-[#8C8745]">
          <span className="h-[2px] w-12 bg-[#8C8745]" />
          <h1 className="text-3xl font-medium tracking-widest">お知らせ</h1>
          <span className="h-[2px] flex-1 bg-[#8C8745]" />
        </div>

        {/* ===== お知らせ一覧 ===== */}
        <ul className="divide-y">
          {news.map((item) => (
            <li key={item._id} className="py-6">
              <Link
                to={`/news/${item.slug.current}`}
                className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8 hover:opacity-70"
              >
                {/* 日付 */}
                <time className="w-32 text-sm text-gray-400">
                  {item.date}
                </time>

                {/* タイトル */}
                <p className="font-semibold text-black">
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        {/* ===== ページネーション ===== */}
        <div className="mt-20 flex justify-center gap-3">
          {/* 前へ */}
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="h-10 w-10 rounded-full border text-lg disabled:opacity-30"
          >
            ‹
          </button>

          {/* ページ番号（Sanity件数連動） */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`h-10 w-10 rounded-full border text-sm transition
                ${
                  page === p
                    ? "border-[#8C8745] text-[#8C8745]"
                    : "hover:bg-gray-100"
                }`}
            >
              {p}
            </button>
          ))}

          {/* 次へ */}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="h-10 w-10 rounded-full border text-lg disabled:opacity-30"
          >
            ›
          </button>
        </div>
      </section>
      <TopSNSLinks />
      <TopFooter />
    </>
  );
};

export default NewsList;
