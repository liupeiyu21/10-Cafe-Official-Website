import { SecondFloorCounter1, SecondFloorCounter2 } from "../../Images";
const SecondFloorCounter = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-20">
      {/* Top */}
      <div className="mb-14 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
        <img
          src={SecondFloorCounter1}
          alt="一階と二階の席の写真"
          className="w-full object-cover md:w-1/2"
        />

        <div className="w-full md:w-1/2">
          <h2 className="mb-5 text-3xl font-semibold tracking-wide text-[#8C8745]">
            カウンター席
          </h2>
          <p className="text-base leading-8 text-black">
            スタッフが厳選したフリーペーパーを置いています。ぜひ、ご覧になってください。
          </p>
        </div>
      </div>

      {/* Bottom images */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <img
          src={SecondFloorCounter2}
          alt="seat 1"
          className="h-52 w-full object-cover"
        />
        <img
          src={SecondFloorCounter1}
          alt="seat 2"
          className="h-52 w-full object-cover"
        />
        <img
          src={SecondFloorCounter2}
          alt="seat 3"
          className="h-52 w-full object-cover"
        />
      </div>
    </section>
  );
};
export default SecondFloorCounter;
