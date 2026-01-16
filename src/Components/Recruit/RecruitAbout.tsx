
const RecruitAbout = () => {
  return (
    <section className="mx-auto max-w-4xl px-6">

      {/* ===== タイトル ===== */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        応募について
      </h2>

      {/* 上区切り線 */}
      <div className="border-t border-dotted border-gray-300 mb-10" />

      {/* ===== 本文 ===== */}
      <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-800">

        <p>10°CAFEでは説明会を行っています。</p>

        <p>
          ご興味をお持ちの方は、まずは説明会から気軽にお越しください。
        </p>

        <p>
          説明会はオンラインと対面をお選びいただけます。
        </p>

        <p>
          説明会に参加していただき面接をご希望の方に後日、面接のご案内をさせていただきます。
        </p>

        <p>
          皆さんのご応募お待ちしております。
        </p>
      </div>

      {/* 下区切り線 */}
      <div className="border-t border-dotted border-gray-300 my-12" />



      {/* ===== 応募方法 ===== */}
      <div className="space-y-6 text-sm md:text-base text-gray-800">

        <p>
          説明会のお申込みは、下記の応募フォームまたは
        </p>

        <p>
          採用InstagramアカウントのDMからお願いいたします。
        </p>

        {/* リンク */}
        <div className="space-y-3">


          <a
            href="https://www.instagram.com/10docafe_recruit_?igsh=MXBwOTZsNWpqdWtndw=="
            target="_blank"
            rel="noopener noreferrer"
            className="block font-semibold text-green-700 hover:opacity-70 transition"
          >
            10°CAFE採用Instagram
          </a>
        </div>
      </div>

    </section>
  );
};

export default RecruitAbout;
