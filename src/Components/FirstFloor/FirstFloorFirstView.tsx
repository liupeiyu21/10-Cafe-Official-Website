
import { FirstFloorKv} from "../../Images";


const FirstFloorFirstView = () => {

  return (

    <section className="relative h-screen overflow-hidden">
      {/* ===== 背景画像 ===== */}
      <img
        src={FirstFloorKv}
        alt="10°cafe"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/*  白い枠線 */}

      <div className="pointer-events-none absolute top-[88px]  md:top-[10%]  inset-3 md:inset-3 z-10 border border-white" />

      {/*  1F / 2F テキスト */}

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex w-full max-w-6xl justify-center px-12 text-white">
          <span className="text-6xl font-semibold tracking-widest">1Foor</span>
        </div>
      </div>
    </section>
  );
};

export default FirstFloorFirstView;



