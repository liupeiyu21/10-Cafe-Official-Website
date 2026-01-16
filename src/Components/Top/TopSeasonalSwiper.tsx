// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Seasonal1, Seasonal2, Seasonal3, Seasonal4 } from "../../Images";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import { urlFor } from "../../../lib/sanityImage";
import { useEffect, useState } from "react";
import { getSwiperBanners } from "../../../lib/sanity"; // ← Sanity取得関数

type SeasonalBanner = {
  _id: string;
  title: string;
  image: any;
  link?: string;
  order?: number;
};

const TopSeasonalSwiper = () => {
  const [banners, setBanners] = useState<SeasonalBanner[]>([]);

  useEffect(() => {
    getSwiperBanners().then(setBanners);
  }, []);

  return (
    <section>
      {/* ===== タイトル ===== */}
      <div className="mx-auto max-w-4xl md:px-6 pt-10 md:pt-24">
        <div className="flex items-center gap-4 text-[#8C8745] pb-10 md:pb-24">
          <span className="block h-[2px] w-16 bg-[#8C8745]" />
          <h2 className="whitespace-nowrap text-xl md:text-4xl font-medium tracking-widest">
            季節限定
          </h2>
          <span className="block h-[2px] flex-1 bg-[#8C8745]" />
        </div>
      </div>

      {/* ===== Swiper ===== */}
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={0}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          prevEl: ".seasonal-prev",
          nextEl: ".seasonal-next",
        }}
        pagination={{
          el: ".seasonal-pagination",
          clickable: true,
        }}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner._id}>
            {banner.link ? (
              <Link to={banner.link}>
                <img
                  src={urlFor(banner.image).width(600).url()}
                  alt={banner.title}
                  className="w-full cursor-pointer hover:opacity-90 transition"
                />
              </Link>
            ) : (
              <img
                src={urlFor(banner.image).width(600).url()}
                alt={banner.title}
                className="w-full cursor-default select-none"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== ナビゲーション ===== */}
      <div className="relative my-5 h-10">
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6 text-[#8C8745]">
          <button className="seasonal-prev text-4xl hover:opacity-60">‹</button>
          <div className="seasonal-pagination flex gap-3" />
          <button className="seasonal-next text-4xl hover:opacity-60">›</button>
        </div>
      </div>
    </section>
  );
};

export default TopSeasonalSwiper;
