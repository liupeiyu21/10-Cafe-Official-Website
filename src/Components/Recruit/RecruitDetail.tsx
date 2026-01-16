const RecruitDetail = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">

      {/* ===== タイトル ===== */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-wide mb-8">
        募集要項
      </h2>

      {/* 区切り線 */}
      <div className="border-t border-dotted border-gray-300 mb-10" />

      {/* ===== 内容 ===== */}
      <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-800">

        <p>
          <span className="font-semibold">応募資格：</span>
          大学生・専門学校生1〜3年生（大学・学部は問いません）
        </p>

        <p>
          <span className="font-semibold">勤務時間：</span>
          シフト制（シフト提出は半月に1度）
        </p>

        <p className="pl-4">
          平日7:30〜21:30
        </p>

        <p className="pl-4">
          土日祝10:00〜21:30（第3日曜日は定休日）
        </p>

        <p>
          <span className="font-semibold">給与：</span>
          時給1,163円　交通費無支給
        </p>

        <p>
          <span className="font-semibold">研修：</span>
          9時間（時給の変更なし）
        </p>

        <p>
          <span className="font-semibold">備考：</span>
          半月25時間以上の申請（柔軟に対応できます）・
          1年以上の在籍・毎月第3日曜に参加必須の会議あり
        </p>

        {/* ===== サブ見出し ===== */}
        <h3 className="pt-8 font-semibold text-base md:text-lg">
          こんな人を募集しています！
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>10°CAFEでやりたいことがある方</li>
          <li>積極的に行動を起こせる方</li>
          <li>責任感を持って仕事ができる方</li>
        </ul>

      </div>
    </section>
  );
};

export default RecruitDetail;
