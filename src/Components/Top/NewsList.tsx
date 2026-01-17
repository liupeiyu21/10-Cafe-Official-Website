import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNewsList, getNewsCount } from "../../../lib/sanity";
import TopFooter from "./TopFooter";
import TopSNSLinks from "./TopSNSLinks";

import TopNav from "./TopNav";

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
      <TopNav />
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
            <li key={item._id} className="py-6 ">
              <Link
                to={`/news/${item.slug.current}`}
                className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8 hover:opacity-70"
              >
                {/* 日付 */}
                <time className="w-32 text-sm text-gray-400">{item.date}</time>

                {/* タイトル */}
                <p className="font-semibold text-black hover:text-[#8C8745]">
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
            className="h-10 w-10 rounded-full border text-lg disabled:opacity-30 cursor-pointer"
          >
            ‹
          </button>

          {/* ページ番号（Sanity件数連動） */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`h-10 w-10 rounded-full border text-sm transition cursor-pointer
                ${
                  page === p
                    ? "border-[#8C8745] text-[#8C8745]"
                    : "hover:bg-[#8C8745]"
                }`}
            >
              {p}
            </button>
          ))}

          {/* 次へ */}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="h-10 w-10 rounded-full border text-lg disabled:opacity-30 cursor-pointer"
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
