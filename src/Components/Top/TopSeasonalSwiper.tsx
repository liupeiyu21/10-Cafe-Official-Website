// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Seasonal1, Seasonal2, Seasonal3, Seasonal4 } from "../../Images";
import { Navigation, Pagination} from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";


const TopSeasonalSwiper = () => {
  return (
    <section>
      <div className="flex items-center gap-4 text-[#8C8745] pb-10 max-w-4xl mx-auto">
        {/* 左ライン（短い） */}
        <span className="block h-[2px] w-17 bg-[#8C8745]" />

        {/* テキスト */}
        <h2 className="whitespace-nowrap text-4xl font-medium tracking-widest">
          季節限定
        </h2>

        {/* 右ライン（長い） */}
        <span className="block h-[2px] flex-1 bg-[#8C8745]" />
      </div>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={2}
        breakpoints={{
            768: {
                slidesPerView: 4,
              },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
            prevEl: ".seasonal-prev",
            nextEl: ".seasonal-next",
          }}
        pagination={{
            el: ".seasonal-pagination",
            clickable: true,
          }}
        className="w-full "
        >
        <SwiperSlide><img src={Seasonal1} alt="Seasonal 1" /></SwiperSlide>
        <SwiperSlide><img src={Seasonal2} alt="Seasonal 2" /></SwiperSlide>
        <SwiperSlide><img src={Seasonal3} alt="Seasonal 3" /></SwiperSlide>
        <SwiperSlide><img src={Seasonal4} alt="Seasonal 4" /></SwiperSlide>
        <SwiperSlide><img src={Seasonal4} alt="Seasonal 4" /></SwiperSlide>
        </Swiper>

        {/* ナビゲーション */}
        <div className="relative mt-10 h-10">
            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6 text-[#8C8745]">
                
                {/* 前 */}
                <button className="seasonal-prev text-4xl hover:opacity-60">
                ‹
                </button>

                {/* ●●● */}
                <div className="seasonal-pagination flex gap-3" />

                {/* 後 */}
                <button className="seasonal-next text-4xl hover:opacity-60">
                ›
                </button>

            </div>
        </div>

    </section>
  );
};

export default TopSeasonalSwiper;