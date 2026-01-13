
const TopAccessSection = () => {
  return (
<section className="bg-[#D9C9A6] pt-20 pb-45">
  <h2 className="text-center text-white text-xl md:text-4xl tracking-widest md:mb-16">
    ACCESS
  </h2>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-10 px-6">

    {/* 地図 */}
    <div className="bg-gray-100 rounded-xl md:rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[500px]">
      <iframe
        title="10cafe-map"
        src="https://www.google.com/maps?q=10%C2%B0cafe%20%E9%AB%98%E7%94%B0%E9%A6%AC%E5%A0%B4&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>

    {/* 紙カード */}
    <div className="
    relative
    bg-[#F6F4EF]
    p-5
    shadow-2xl
    w-[300px] md:w-[330px]
    md:rotate-15
    absolute md:top-30 md:right-15
    ">

    {/* テープ */}
    <div className="
        absolute
        -top-8
        left-1/2
        -translate-x-1/2
        w-32
        h-15
        bg-[#BFD2C4]
        opacity-70
        rotate-3
        rounded-sm
        shadow-md
    " />

    {/* 中身 */}
    <h3 className="font-bold text-lg mb-2">アクセス</h3>
    <p className="mb-3">高田馬場駅から徒歩3分</p>

    <h4 className="font-bold">営業時間</h4>

    <div className="mt-6 space-y-3 text-sm leading-relaxed">
        <p className="font-semibold">CAFE</p>
        <p>【月〜木】9:00〜20:30（L.O.20:00）</p>
        <p>【金・土】9:00〜23:30（L.O.23:00）</p>
        <p>【日】11:00〜21:00（L.O.20:00）</p>

        <p className="font-semibold mt-4">SPACE</p>
        <p>【月〜木】9:00〜20:30（L.O.20:00）</p>
        <p>【金・土】9:00〜23:30（L.O.23:00）</p>
        <p>【日】11:00〜21:00（L.O.20:00）</p>
    </div>

    <p className="mt-10 text-sm text-gray-500">
        〒171-0033 東京都豊島区高田3丁目12-8
    </p>
    </div>

  </div>
</section>

  );
};

export default TopAccessSection;
