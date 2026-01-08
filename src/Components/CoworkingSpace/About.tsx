import { CoworkingSpaceAbout } from "../../Images"; // ✅ change to your actual image export name

const About = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      {/* Top image */}
      <div className="w-full">
        <img
          src={CoworkingSpaceAbout}
          alt="10°Cafe コワーキングスペース"
          className="w-full object-cover"
        />
      </div>

      {/* Text area */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold tracking-widest text-[#8C8745] md:text-4xl">
          学びも仕事も、カフェでスマートに
        </h2>

        <p className="mt-10 max-w-5xl whitespace-pre-line text-base leading-8 text-black">
          10°cafeでは、勉強やお仕事に集中できるコワーキングスペースをご用意しています。心地よい空間と香り高いスペシャルティコーヒーで、作業効率も自然と高まります。カフェならではの落ち着いた雰囲気の中、リラックスしながらお仕事や学習に取り組んでいただけます。自宅ではなかなか集中できない方、カフェの心地よい空間で作業したい方、美味しいコーヒー片手に仕事や勉強をしたい方に最適です。Wi-Fiと電源を完備しているので、オンラインミーティングやPC作業も快適に行えます。あなたの「集中できる場所」として、ぜひ10°cafeをご活用ください。
        </p>
      </div>
    </section>
  );
};

export default About;
