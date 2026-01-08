import { ManualCharacter } from "../../Images"; // ← change name if needed

const Manual = () => {
  return (
    <section className="ml-auto max-w-7xl py-24">
      <div className="relative rounded-l-3xl rounded-r-none bg-[#F6F4EF] px-8 py-20 md:px-16">
        {/* Text */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-10 text-3xl font-semibold tracking-widest text-[#8C8745]">
            ご利用方法について
          </h2>

          <p className="whitespace-pre-line text-[20px] leading-8 text-[#8C8745]">
            ご利用をご希望のお客様は当店1階にてスタッフにお声かけください！
            {"\n"}
            空いてるお席にご案内いたします。
            {"\n"}
            口頭・お電話にてご予約も可能です。（平日のみ）
          </p>
        </div>

        {/* Character image */}
        <img
          src={ManualCharacter}
          alt="10°cafe character"
          className="absolute bottom-8 right-8 w-32 md:w-40"
        />
      </div>
    </section>
  );
};

export default Manual;
