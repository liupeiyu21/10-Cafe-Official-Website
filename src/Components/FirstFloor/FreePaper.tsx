import { FreePaper1 } from "../../Images";
const FreePaper = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-20">
      {/* Top */}
      <div className="mb-14 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
        <img
          src={FreePaper1}
          alt="横ならび席"
          className="w-full object-cover md:w-1/2"
        />

        <div className="w-full md:w-1/2">
          <h2 className="mb-5 text-3xl font-semibold tracking-wide text-[#8a8455]">
            フリーペーパー設置
          </h2>
          <p className="text-base leading-8 text-zinc-800">
            スタッフが厳選したフリーペーパーを置いています。ぜひ、ご覧になってください
          </p>
        </div>
      </div>

      {/* Bottom images */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <img
          src={FreePaper1}
          alt="seat 1"
          className="h-52 w-full object-cover"
        />
        <img
          src={FreePaper1}
          alt="seat 2"
          className="h-52 w-full object-cover"
        />
        <img
          src={FreePaper1}
          alt="seat 3"
          className="h-52 w-full object-cover"
        />
      </div>
    </section>
  );
};
export default FreePaper;
