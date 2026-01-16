import { GiCoffeeBeans } from "react-icons/gi";

const Specialty = () => {
  return (
    <section className="bg-white pt-40 px-6">
      <div className="mx-auto max-w-4xl text-center">

        <div className="flex flex-col items-center justify-center gap-3 mb-12 md:flex-row">

        {/* アイコン */}
        <GiCoffeeBeans className="text-3xl md:text-5xl text-[#777]" />

        {/* タイトル */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#333] text-center md:text-left">
            こだわりぬいた
            <span className="text-[#3E6F73] font-bold mx-1">
            Specialty
            </span>
            なコーヒー豆
        </h2>

        </div>


        {/* ===== 説明文 ===== */}
        <div className="space-y-6 text-[#333] leading-relaxed text-base md:text-lg">
          <p>
            10°cafeでは厳選したスペシャルティーコーヒーのみを使用し、
            丁寧に挽いて提供しています。
          </p>

          <p>
            スペシャリティーコーヒーとは、
          </p>

          <p>
            世界中で流通しているコーヒー豆のうち、
            わずか上位5%にランクインする最高品質の豆のこと。
          </p>

          <p>
            豆の産地や品種によって異なる豊かな風味や個性を
            楽しめるのが特徴です。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Specialty;
