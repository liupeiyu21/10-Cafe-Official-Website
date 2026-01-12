import { Floor1, Floor2, Floor3 } from '../../Images';

const FloorSection = () => {
  return (
    <section className="bg-[#F6F4EF] py-24">
      <div className="relative mx-auto max-w-4xl">

        {/* ===== 1F ===== */}
        
      <div className="grid items-center grid-cols-[170px_1fr] md:grid-cols-[7.6fr_5fr] ">
        {/* ===== 画像 ===== */}
        <div className="relative">
          <img
            src={Floor1}
            alt="1F 横ならび席"
            className="
              w-full h-auto object-contain
              md:h-full md:w-full md:object-cover
            "
          />
          <span className="absolute top-0 left-4 md:left-0 text-4xl md:text-6xl font-bold text-[#8C8745] text-outline">
            1F
          </span>
        </div>

        {/* ===== テキスト ===== */}
        <div className="flex items-center bg-[#F6F3EE] pl-1 pr-4 md:px-12 py-4">
          <div>
            <h3 className="mb-4 md:mb-10 text-xl md:text-4xl font-semibold text-[#8C8745]">
              横ならび席
            </h3>
            <p className="text-sm md:text-lg leading-relaxed">
              1人でゆっくりランチをしたり、
              作業をされたい方におすすめな
              横並びのお席です。
            </p>
          </div>
        </div>
      </div>

        

        {/* ===== 2F ===== */}
        <div className="grid items-stretch md:grid-cols-[5fr_7fr]">
          {/* テキスト */}
          <div className="flex items-center bg-[#F6F3EE] px-10 md:px-12">
            <div>
              <h3 className="mb-10 text-4xl font-semibold text-[#8C8745]">
                テーブル席
              </h3>
              <p className="text-lg leading-relaxed">
                1人で作業したり、2人でおしゃべり
                したりできる落ち着いた雰囲気の
                スペースです。
              </p>
            </div>
          </div>

          {/* 画像 */}
          <div className="relative ">
            <img
              src={Floor2}
              alt="2F テーブル席"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-93 right-0 text-6xl font-bold text-[#8C8745] text-outline">
              2F
            </span>
          </div>
        </div>
        

        {/* ===== 3F ===== */}
        <div className="grid items-stretch md:grid-cols-[7.3fr_5fr]">
          {/* 画像 */}
          <div className="">
            <div className=" ">
            <img
              src={Floor3}
              alt="3F コワーキングスペース"
              className="h-full w-full object-cover"
            />
            <span className="absolute top-202 left-0 text-6xl font-bold text-[#8C8745] text-outline">
              3F
            </span>
            </div>
          </div>

          {/* テキスト */}
          <div className="flex items-center bg-[#F6F3EE] px-10 md:px-12">
            <div>
              <h3 className="mb-10 text-4xl font-semibold text-[#8C8745]">
                COWORKING SPACE
              </h3>
              <p className="text-lg leading-relaxed">
                カフェの落ち着いた雰囲気の中で、
                勉強や仕事に集中できる
                コワーキングスペースです。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FloorSection;
