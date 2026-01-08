import { PriceClock1, PriceClock2, PriceClock3 } from "../../Images";
const Price = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      {/* ===== Price ===== */}
      <h2 className="mb-16 text-center text-3xl font-semibold tracking-widest text-[#8C8745]">
        料金
      </h2>

      <div className="mb-32 grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col items-center rounded-2xl bg-[#F7F5EE] px-8 py-14 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
            <img src={PriceClock1} alt="clock icon" className="h-20 w-20" />
          </div>
          <p className="mb-2 text-sm text-[#8C8745]">最初の60分</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥600</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center rounded-2xl bg-[#F7F5EE] px-8 py-14 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
            <img src={PriceClock2} alt="clock icon" className="h-20 w-20" />
          </div>
          <p className="mb-2 text-sm text-[#8C8745]">以後の10分毎</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥100</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center rounded-2xl bg-[#F7F5EE] px-8 py-14 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
            <img src={PriceClock3} alt="clock icon" className="h-20 w-20" />
          </div>
          <p className="mb-2 text-sm text-[#8C8745]">1日の最大料金</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥2,400</p>
        </div>
      </div>

      {/* ===== Pack Price ===== */}
      <h2 className="mb-16 text-center text-3xl font-semibold tracking-widest text-[#8C8745]">
        パック料金
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Pack 1 */}
        <div className="flex flex-col items-center rounded-2xl bg-[#F7F5EE] px-8 py-16 text-center">
          <p className="mb-6 text-6xl font-semibold text-[#8C8745]">5h</p>
          <p className="mb-2 text-sm text-[#8C8745]">5時間パック</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥2,000</p>
        </div>

        {/* Pack 2 */}
        <div className="flex flex-col items-center rounded-2xl bg-[#F7F5EE] px-8 py-16 text-center">
          <p className="mb-6 text-6xl font-semibold text-[#8C8745]">3h</p>
          <p className="mb-2 text-sm text-[#8C8745]">3時間パック</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥1,500</p>
        </div>

        {/* Pack 3 */}
        <div className="flex flex-col items-center rounded-2xl bg-[#F7F5EE] px-8 py-16 text-center">
          <p className="mb-6 text-6xl font-semibold text-[#8C8745]">24h</p>
          <p className="mb-2 text-sm text-[#8C8745]">1日の最大料金</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥2,400</p>
        </div>
      </div>
    </section>
  );
};

export default Price;
