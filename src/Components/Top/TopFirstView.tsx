import { useState } from "react";
import { TopKv, Logo, Tophamburger } from "../../Images";
// import { Link } from "react-router-dom";
// import TopNav from "./TopNav";

const TopFirstView = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* 背景 */}
        <img
          src={TopKv}
          alt="10°cafe"
          className="absolute inset-0 w-full h-full  object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* ===== 中央テキスト ===== */}
        <div className="relative z-20 flex h-full items-center justify-center text-white pt-10 md:pt-50">
          <div className="text-center px-6 -translate-y-15 md:-translate-y-16">
            <h1 className="font-impact text-6xl md:text-9xl font-extrabold">
              10°Cafe
            </h1>

            <p className="my-5 text-2xl md:text-4xl tracking-widest">
              高田馬場店
            </p>
            <p className="my-8 text-lg md:text-2xl">
              小さなきっかけ(10°)がそこに
            </p>
            <p className="text-sm md:text-lg">
              高田馬場駅から徒歩3分。「人生が、ほんのちょっと(10°)変わるきっかけ」が見つかるお店。
            </p>
            <p className="text-sm md:text-lg">
              【全席電源＆wifi完備】でリモートワークなどに最適です。
              1.2F:カフェスペース
            </p>
            <p className="text-sm md:text-lg">
              3F:コワーキングスペースとなっており、個室でより集中できる空間をご利用いただけます。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopFirstView;
