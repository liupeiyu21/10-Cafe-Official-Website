const PrivacyPolicyPage = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-2xl md:text-3xl font-medium mb-12 text-center">
        プライバシーポリシー
      </h1>

      <div className="space-y-10 text-sm leading-relaxed text-gray-800">
        {/* 1 */}
        <section>
          <h2 className="font-semibold mb-2">個人情報の取り扱いについて</h2>
          <p>
            10°CAFE（以下、「当店」といいます。）は、お客様の個人情報を適切に保護し、
            以下の方針に基づいて取り扱います。
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="font-semibold mb-2">取得する個人情報</h2>
          <p>
            当店では、お問い合わせフォームの送信時に、以下の個人情報を取得する場合があります。
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>お名前</li>
            <li>メールアドレス</li>
            <li>お問い合わせ内容</li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="font-semibold mb-2">個人情報の利用目的</h2>
          <p>
            取得した個人情報は、以下の目的のために利用いたします。
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>お問い合わせへの対応</li>
            <li>必要なご連絡・ご案内</li>
            <li>サービス向上のための参考</li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="font-semibold mb-2">個人情報の第三者提供</h2>
          <p>
            当店は、法令に基づく場合を除き、取得した個人情報を
            ご本人の同意なく第三者に提供することはありません。
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2 className="font-semibold mb-2">個人情報の管理</h2>
          <p>
            当店は、個人情報の漏洩・紛失・不正アクセスを防止するため、
            適切な安全管理措置を講じます。
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="font-semibold mb-2">個人情報の開示・訂正・削除</h2>
          <p>
            ご本人から個人情報の開示・訂正・削除のご希望があった場合は、
            本人確認のうえ、速やかに対応いたします。
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="font-semibold mb-2">プライバシーポリシーの変更</h2>
          <p>
            本ポリシーの内容は、法令の変更や運営方針の見直しにより、
            予告なく変更される場合があります。
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2 className="font-semibold mb-2">お問い合わせ窓口</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
          </p>
          <p className="mt-2">
            10°CAFE<br />
          </p>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
