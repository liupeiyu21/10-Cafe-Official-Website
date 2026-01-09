import { PriceClock1, PriceClock2, PriceClock3 } from "../../Images";
const Price = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      {/* ===== Price ===== */}
      <h2 className="mb-16 text-center text-3xl font-semibold tracking-widest text-[#8C8745]">
        料金
      </h2>

      <div className="mb-32 grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Card 1 */}
        <div
          className="
              w-70
              md:w-full
              mx-auto
              flex flex-col items-center
              rounded-2xl
              bg-[#F7F5EE]
              px-5 py-6
              md:px-8 md:py-14
              text-center
            "
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
            <img
              src={PriceClock1}
              alt="clock icon"
              className="h-14 w-14 md:h-20 md:w-20"
            />
          </div>
          <p className="mb-2 text-sm text-[#8C8745]">最初の60分</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥600</p>
        </div>

        {/* Card 2 */}
        <div
          className="
              w-70
              md:w-full
              mx-auto
              flex flex-col items-center
              rounded-2xl
              bg-[#F7F5EE]
              px-5 py-6
              md:px-8 md:py-14
              text-center
            "
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
            <img
              src={PriceClock2}
              alt="clock icon"
              className="h-14 w-14 md:h-20 md:w-20"
            />
          </div>
          <p className="mb-2 text-sm text-[#8C8745]">以後の10分毎</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥100</p>
        </div>

        {/* Card 3 */}
        <div
          className="
              w-70
              md:w-full
              mx-auto
              flex flex-col items-center
              rounded-2xl
              bg-[#F7F5EE]
              px-5 py-6
              md:px-8 md:py-14
              text-center
            "
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
            <img
              src={PriceClock3}
              alt="clock icon"
              className="h-14 w-14 md:h-20 md:w-20"
            />
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
        <div
          className="
              w-70
              md:w-full
              mx-auto
              flex flex-col items-center
              rounded-2xl
              bg-[#F7F5EE]
              px-5 py-6
              md:px-8 md:py-14
              text-center
            "
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
            <p className="text-6xl font-semibold text-[#8C8745]">5h</p>
          </div>
          <p className="mb-2 text-sm text-[#8C8745]">1日の最大料金</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥2,000</p>
        </div>

        {/* Pack 2 */}
        <div
          className="
              w-70
              md:w-full
              mx-auto
              flex flex-col items-center
              rounded-2xl
              bg-[#F7F5EE]
              px-5 py-6
              md:px-8 md:py-14
              text-center
            "
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
            <p className="text-6xl font-semibold text-[#8C8745]">3h</p>
          </div>
          <p className="mb-2 text-sm text-[#8C8745]">1日の最大料金</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥100</p>
        </div>

        {/* Pack 3 */}
        <div
          className="
              w-70
              md:w-full
              mx-auto
              flex flex-col items-center
              rounded-2xl
              bg-[#F7F5EE]
              px-5 py-6
              md:px-8 md:py-14
              text-center
            "
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center">
            <p className="text-6xl font-semibold text-[#8C8745]">24h</p>
          </div>
          <p className="mb-2 text-sm text-[#8C8745]">1日の最大料金</p>
          <p className="text-lg font-semibold text-[#8C8745]">¥2,400</p>
        </div>
      </div>
    </section>
  );
};

export default Price;
