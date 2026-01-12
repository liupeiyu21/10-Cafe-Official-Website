
import { TopMenuFood, TopMenuDrink, TopMenuTakeout } from "../../Images";
import TopMenuCard from "./TopMenuCard";


const TopMenuSection = () => {
  return (
    <section className="bg-white py-10 md:py-24">
      <div className="mx-auto max-w-4xl md:px-6">

        {/* ===== セクションタイトル ===== */}
      <div className="flex items-center gap-4 text-[#8C8745] pb-10">
        {/* 左ライン（短い） */}
        <span className="block h-[2px] w-17 bg-[#8C8745]" />

        {/* テキスト */}
        <h2 className="whitespace-nowrap text-xl md:text-4xl font-medium tracking-widest">
          メニュー
        </h2>

        {/* 右ライン（長い） */}
        <span className="block h-[2px] flex-1 bg-[#8C8745]" />
      </div>


        {/* ===== メニューカード ===== */}
        <div className="grid  md:grid-cols-3">

          {/* Food Menu */}
          <TopMenuCard
            image={TopMenuFood}
            label="Food Menu"
          />

          {/* Drink Menu */}
          <TopMenuCard
            image={TopMenuDrink}
            label="Drink Menu"
          />

          {/* Take Out */}
          <TopMenuCard
            image={TopMenuTakeout}
            label="Take Out"
          />

        </div>
      </div>
    </section>
  );
};

export default TopMenuSection;
