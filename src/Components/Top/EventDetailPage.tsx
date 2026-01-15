import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { getEventBySlug } from "../../../lib/sanity";
import { urlFor } from "../../../lib/sanityImage";

import TopSNSLinks from "./TopSNSLinks";
import TopFooter from "./TopFooter";
import TopNav from "./TopNav";


type Event = {
  _id: string;
  title: string;
  image: any;
  body: any;
  eventDate?: string;
};

const EventDetailPage = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!slug) return;
    getEventBySlug(slug).then(setEvent);
  }, [slug]);

  if (!event) {
    return <div className="py-40 text-center">Loading...</div>;
  }

  return (
    <>
        <TopNav />
        <main className="bg-white pt-30">
        <div className="mx-auto max-w-3xl px-6">
            {/* ===== タイトル ===== */}
            <h1 className="text-3xl md:text-4xl font-semibold">
            {event.title}
            </h1>

            {/* ===== 日付（任意） ===== */}
            {event.eventDate && (
            <p className="mt-3 text-sm text-gray-500">
                {new Date(event.eventDate).toLocaleDateString("ja-JP")}
            </p>
            )}

            {/* ===== 画像 ===== */}
            <img
            src={urlFor(event.image).width(1000).url()}
            alt={event.title}
            className="my-10 rounded-md"
            />

            {/* ===== 本文（Sanity PortableText） ===== */}
            <div className="prose prose-neutral max-w-none">
            <PortableText value={event.body} />
            </div>

            {/* ===== 戻る ===== */}
       
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
                    ← イベント一覧へ戻る
                </button>

              
            </Link>

        </div>
        </main>
        <TopSNSLinks />
        <TopFooter />
    </>
  );
};

export default EventDetailPage;
