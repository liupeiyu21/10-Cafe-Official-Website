type GreenbarProps = {
  active?: "1F" | "2F" | "CWS";
};

const Greenbar = ({ active = "1F" }: GreenbarProps) => {
  return (
    <div className="flex justify-center py-10 mt-10">
      <div className="relative flex h-14 w-[420px] rounded-full bg-[#c9c66d]">
        {/* Active pill */}
        <div
          className={`absolute top-0 h-14 w-1/3 rounded-full bg-[#8f8d52] transition-all duration-300
            ${active === "1F" && "left-0"}
            ${active === "2F" && "left-1/3"}
            ${active === "CWS" && "left-2/3"}
          `}
        />

        {/* Labels */}
        <div className="relative z-10 flex w-full text-white">
          <div className="flex w-1/3 items-center justify-center text-lg font-medium">
            1F
          </div>
          <div className="flex w-1/3 items-center justify-center text-lg font-medium">
            2F
          </div>
          <div className="flex w-1/3 items-center justify-center text-lg font-medium">
            CWS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greenbar;
