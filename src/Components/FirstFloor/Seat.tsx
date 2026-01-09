import {
  FirstFloorSeat1,
  FirstFloorSeat2,
  FirstFloorSeat3,
  FirstFloorSeat4,
} from "../../Images";
const Seat = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      {/* Top */}
      <div className="mb-14 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
        <img
          src={FirstFloorSeat1}
          alt="横ならび席"
          className="w-full object-cover md:w-1/2"
        />

        <div className="w-full md:w-1/2">
          <h2 className="mb-5 text-3xl font-semibold tracking-wide text-[#8C8745]">
            横ならび席
          </h2>
          <p className="text-base leading-8 text-black">
            1人でゆっくりランチをしたり、作業をされたい方におすすめな横並びのお席です。
          </p>
        </div>
      </div>

      {/* Bottom images */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <img
          src={FirstFloorSeat2}
          alt="seat 1"
          className="h-52 w-full object-cover"
        />
        <img
          src={FirstFloorSeat3}
          alt="seat 2"
          className="h-52 w-full object-cover"
        />
        <img
          src={FirstFloorSeat4}
          alt="seat 3"
          className="h-52 w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Seat;
