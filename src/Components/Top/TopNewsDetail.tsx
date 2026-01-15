import { useState,useEffect } from "react";
import { Logo, Tophamburger } from "../../Images";
import { Link, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { getNewsBySlug } from "../../../lib/sanity";
import TopSNSLinks from "./TopSNSLinks";
import TopFooter from "./TopFooter";
import TopNav from "./TopNav";

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
        <TopNav />
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