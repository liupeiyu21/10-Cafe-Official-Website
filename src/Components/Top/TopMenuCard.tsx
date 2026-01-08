const TopMenuCard = ({ image, label }: { image: string; label: string }) => {
  return (
    <div className="group relative h-[220px] overflow-hidden">
      
      {/* 画像 */}
      <img
        src={image}
        alt={label}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* 黒オーバーレイ */}
      <div className="absolute inset-0 bg-black/35 transition-opacity duration-300 group-hover:opacity-0" />

      {/* テキスト */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-lg font-semibold tracking-wide text-white">
          {label}
        </p>
      </div>

    </div>
  );
};

export default TopMenuCard;
