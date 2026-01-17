// Components/Top/EventsPage.tsx
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getEvents } from "../../../lib/sanity";
// import { Logo, Tophamburger } from "../../Images";
import TopSNSLinks from "./TopSNSLinks";
import TopFooter from "./TopFooter";
import TopNav from "./TopNav";

const PER_PAGE = 10;

const EventsPage = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const [events, setEvents] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getEvents(page, PER_PAGE).then((res) => {
      setEvents(res.events);
      setTotal(res.total);
    });
  }, [page]);

  const totalPages = Math.ceil(total / PER_PAGE);

  return (
    <>
      <TopNav />
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
                  <p className="text-gray-400 w-32">{event.date}</p>
                  <h3 className="text-lg font-medium">{event.title}</h3>
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
