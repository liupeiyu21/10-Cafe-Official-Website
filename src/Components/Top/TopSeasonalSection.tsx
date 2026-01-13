import { useEffect, useState } from "react";
import { getSeasonal } from "../../../lib/sanity";
import { urlFor } from "../../../lib/sanityImage";

type Seasonal = {
  _id: string;
  title: string;
  description: string;
  image: any;
};

const TopSeasonalSection = () => {
  const [seasonal, setSeasonal] = useState<Seasonal | null>(null);

  useEffect(() => {
    getSeasonal().then((data) => {
      setSeasonal(data);
    });
  }, []);

  if (!seasonal) return null;

  return (
    <section className="bg-[#F6F4EF] py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start">

          {/* 画像 */}
          <div className="w-full md:max-w-[40%] px-[5%]">
            <img
              src={urlFor(seasonal.image).width(600).url()}
              alt={seasonal.title}
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* テキスト */}
          <div className="flex-1">
            <h3 className="mb-6 text-xl md:text-4xl text-center font-semibold text-[#8C8745]">
              {seasonal.title}
            </h3>
            <p className="text-xs md:text-lg leading-relaxed text-gray-800 whitespace-pre-line">
              {seasonal.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopSeasonalSection;




