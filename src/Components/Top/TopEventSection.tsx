import { Even1, Even2 }  from "../../Images";

const TopEventSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* ===== セクションタイトル ===== */}
        <div className="flex items-center gap-4 text-[#8C8745] pb-10">
            {/* 左ライン（短い） */}
            <span className="block h-[2px] w-17 bg-[#8C8745]" />

            {/* テキスト */}
            <h2 className="whitespace-nowrap text-4xl font-medium tracking-widest">
            イベント開催
            </h2>

            {/* 右ライン（長い） */}
            <span className="block h-[2px] flex-1 bg-[#8C8745]" />
        </div>
      </div>

      {/* ===== カード ===== */}
      <div className="mx-auto grid max-w-5xl grid-cols-3 items-end gap-16 px-6">
        
        {/* 左 */}
        <div className="text-center">

          <img src={Even1} alt="イベント現場の写真" />
          <p className="text-sm leading-relaxed">
            XXXXXXXXXXXX<br />
            XXXXXXXXXXXX
          </p>
        </div>

        {/* 中（大きい） */}
        <div className="text-center">

          <img src={Even2} alt="イベント現場の写真" />
          <p className="text-sm leading-relaxed">
            XXXXXXXXXXXX<br />
            XXXXXXXXXXXX
          </p>
        </div>

        {/* 右 */}
        <div className="text-center">
            <img src={Even1} alt="イベント現場の写真" />
          <p className="text-sm leading-relaxed">
            XXXXXXXXXXXX<br />
            XXXXXXXXXXXX
          </p>
        </div>

      </div>
    </section>
  );
};

export default TopEventSection;
