import {
  SecondFloorTable1,
  SecondFloorTable2,
  SecondFloorTable3,
} from "../../Images";
const SecondFloorTable = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      {/* Top */}
      <div className="mb-14 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
        <img
          src={SecondFloorTable1}
          alt="一階と二階の席の写真"
          className="w-full object-cover md:w-1/2"
        />

        <div className="w-full md:w-1/2">
          <h2 className="mb-5 text-[32px] font-bold tracking-wide text-[#8C8745]">
            テーブル席
          </h2>
          <p className="text-[18px] leading-8 text-black">
            1人で作業したり、2人でおしゃべり したりできる賑やかな雰囲気のスペ
            ースです。のんびりと作業をされたい 方におすすめです
          </p>
        </div>
      </div>

      {/* Bottom images */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <img
          src={SecondFloorTable2}
          alt="seat 1"
          className="h-52 w-full object-cover"
        />
        <img
          src={SecondFloorTable3}
          alt="seat 2"
          className="h-52 w-full object-cover"
        />
        <img
          src={SecondFloorTable2}
          alt="seat 3"
          className="h-52 w-full object-cover"
        />
      </div>
    </section>
  );
};
export default SecondFloorTable;
