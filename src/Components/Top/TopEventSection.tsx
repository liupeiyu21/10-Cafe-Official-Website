import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../../lib/sanityImage";
import { getTopEvents } from "../../../lib/sanity";

type Event = {
  _id: string;
  title: string;
  summary: string;
  image: any;
  slug: {
    current: string;
  };
  eventDate?: string;
};

const TopEventSection = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getTopEvents().then(setEvents);
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl ">
        {/* ===== セクションタイトル ===== */}
        <div className="flex items-center gap-4 text-[#8C8745] pb-16">
          <span className="block h-[2px] w-16 bg-[#8C8745]" />
          <h2 className="whitespace-nowrap text-xl md:text-4xl font-medium tracking-widest">
            イベント開催
          </h2>
          <span className="block h-[2px] flex-1 bg-[#8C8745]" />
        </div>

        {/* ===== イベントカード（最大3件） ===== */}
        <div className="space-y-20">
          {events.map((event) => (
            <div
              key={event._id}
              className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-8"
            >
              <div className="px-[10%] md:px-0">
              {/* 画像 */}
              <img
                src={urlFor(event.image).width(500).url()}
                alt={event.title}
                className="rounded-xl"
              />
              </div>

              {/* テキスト */}
              <div className="flex flex-col justify-center px-[10%]">
                <h3 className="text-xl md:text-4xl text-[#8C8745] font-semibold">
                  {event.title}
                </h3>

                <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-700">
                  {event.summary}
                </p>

                <Link
                  to={`/events/${event.slug.current}`}
                  className="inline-block mt-6 text-sm font-bold underline hover:opacity-70"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ===== もっと見る ===== */}

          <Link
            to="/events"
           >
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
              もっと見る
            </button>
         
          </Link>

      </div>
    </section>
  );
};

export default TopEventSection;
