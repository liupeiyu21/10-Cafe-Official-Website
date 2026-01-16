import { Caffeebeans } from "../../Images";

const EcLink = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h3 className="text-2xl text-center pb-10 md:py-20  md:text-4xl font-semibold mb-4">
        店頭・オンライン購入
      </h3>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[40%_1fr] items-start">
        {/* 左：画像 */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={Caffeebeans}
            alt="caffee beans"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 右：テキスト */}
        <div className="mx-auto text-center md:text-start flex flex-col h-full">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 text-start">
            そんなこだわりのコーヒーをご自宅でもお楽しみいただけるように、
            店頭では1,800円、オンラインでは2,000円で販売しております。
            こだわりのコーヒーをぜひ10°cafeで、そしてご自宅でもお楽しみください。
          </p>

          {/* ★ ボタン（常に一番下） */}
          <a
            href="https://10docafe.base.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="
                    mt-auto
                    self-center
                    inline-flex items-center justify-center
                    px-10 py-4
                    max-w-[320px]
                    w-full
                    rounded-full
                    border border-[#8C8745]
                    text-[#8C8745] text-sm tracking-widest
                    hover:bg-[#8C8745] hover:text-white
                    transition-colors duration-300
                "
          >
            ECサイトはこちら
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcLink;
