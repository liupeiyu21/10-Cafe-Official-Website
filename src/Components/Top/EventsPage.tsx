// Components/Top/EventsPage.tsx
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getEvents } from "../../../lib/sanity";
import { Logo, Tophamburger } from "../../Images";
import TopSNSLinks from "./TopSNSLinks";
import TopFooter from "./TopFooter";

const PER_PAGE = 10;

const EventsPage = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const [events, setEvents] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getEvents(page, PER_PAGE).then((res) => {
      setEvents(res.events);
      setTotal(res.total);
    });
  }, [page]);

  const totalPages = Math.ceil(total / PER_PAGE);

  return (
    <>
        <header className="fixed top-0 left-0 z-50 w-full bg-[#F6F4EF]">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center">
          
          {/* ロゴ（スマホ中央） */}
          <div className="flex-1 flex justify-center m  md:justify-start">
            <Link to="/">
              <img src={Logo} alt="logo" className="pl-[40px] h-12" />
            </Link>
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
          <ul className="flex flex-col items-start gap-6 text-sm pl-[10%] ">
            <li>
              <Link to="/firstfloor" onClick={() => setIsOpen(false)} className="text-white font-bold">
                1F
              </Link>
            </li>
            <li>
              <Link to="/secondfloor" onClick={() => setIsOpen(false)} className="text-white font-bold">
                2F
              </Link>
            </li>
            <li>
              <Link to="/coworkingspace" onClick={() => setIsOpen(false)} className="text-white font-bold">
                COWORKING SPACE
              </Link>
            </li>
            <li>
              <Link to="/beans" onClick={() => setIsOpen(false)} className="text-white font-bold">
                Coffee Beans
              </Link>
            </li>
            <li>
              <Link to="/recruit" onClick={() => setIsOpen(false)} className="text-white font-bold">
                RECRUIT
              </Link>
            </li>
            <li>
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

        <section className="bg-white pt-30">
        <div className="mx-auto max-w-4xl px-6">

            {/* ===== タイトル ===== */}
            <div className="flex items-center gap-4 text-[#8C8745] pb-12">
            <span className="block h-[2px] w-16 bg-[#8C8745]" />
            <h1 className="text-xl md:text-4xl font-medium tracking-widest">
                イベント一覧
            </h1>
            <span className="block h-[2px] flex-1 bg-[#8C8745]" />
            </div>

            {/* ===== 一覧 ===== */}
            <div>
            {events.map((event) => (
                <Link
                key={event._id}
                to={`/events/${event.slug.current}`}
                className="block border-t py-8 hover:opacity-70"
                >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <p className="text-gray-400 w-32">
                    {event.date}
                    </p>
                    <h3 className="text-lg font-medium">
                    {event.title}
                    </h3>
                </div>
                </Link>
            ))}
            </div>

            {/* ===== ページネーション ===== */}
            <div className="flex justify-center gap-4 pt-16">
            {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                <Link
                    key={p}
                    to={`/events?page=${p}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border
                    ${
                        p === page
                        ? "border-[#8C8745] text-[#8C8745]"
                        : "border-gray-300 text-gray-400"
                    }`}
                >
                    {p}
                </Link>
                );
            })}
            </div>
        </div>
        </section>
        <TopSNSLinks />
        <TopFooter />
    </>
  );
};

export default EventsPage;
