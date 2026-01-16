import { Recruit } from "../../Images";
const RecruitFirstView = () => {
    return(
        <>
      {/* ===== ヒーロー画像 ===== */}
      <section className="relative w-full h-[220px] md:h-[360px] overflow-hidden ">
        
        {/* 背景画像 */}
        <img
          src={Recruit}
          alt="採用情報"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 黒グラデーション（可読性UP） */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* テキスト */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-5xl px-6">
            <h1 className="text-white text-2xl md:text-4xl font-semibold tracking-wide">
              募集要項
            </h1>
          </div>
        </div>
      </section>
      </>
    )
}

export default RecruitFirstView