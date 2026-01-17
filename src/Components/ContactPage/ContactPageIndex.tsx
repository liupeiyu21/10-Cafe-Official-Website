import { useState } from "react";
import TopNav from "../Top/TopNav";
// import TopSNSLinks from "../Top/TopSNSLinks";
import TopFooter from "../Top/TopFooter";

const ContactPageIndex = () => {
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agree) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();
      setSuccess(true);
      form.reset();
    } catch {
      setError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopNav/>
      <section className="max-w-7xl mx-auto px-6 pt-36 pb-20 md:pt-42 md:pb-20">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          
          {/* 左：テキスト */}
          <div>
            <h1 className="text-2xl tracking-widest mb-8">CONTACT US</h1>
            <p className="text-sm leading-relaxed mb-4">
              10°CAFE＆10°SPACEへのお問い合わせは、下記フォームからお送りください。
            </p>
            <p className="text-sm leading-relaxed">
              ご記入いただいた情報は、弊社プライバシーポリシーに沿ってお取り扱い致します。
            </p>
          </div>

          {/* 右：フォーム */}
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <input
              name="name"
              placeholder="お名前"
              required
              className="w-full border border-black px-4 py-3 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="メールアドレス"
              required
              className="w-full border border-black px-4 py-3 outline-none"
            />

            <input
              name="subject"
              placeholder="題名"
              className="w-full border border-black px-4 py-3 outline-none"
            />

            <textarea
              name="message"
              placeholder="メッセージ"
              required
              rows={8}
              className="w-full border border-black px-4 py-3 outline-none resize-none"
            />

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-4 h-4"
              />

              <span>
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-600"
                >
                  プライバシーポリシー
                </a>
                に同意します
              </span>
            </label>


            {success && (
              <p className="text-sm text-green-600">
                送信ありがとうございました。
              </p>
            )}

            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!agree || loading}
              className={`px-10 py-3 text-sm tracking-widest transition
                ${
                  agree
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              {loading ? "送信中…" : "送信する"}
            </button>
          </form>
        </div>
      </section>
      {/* <TopSNSLinks /> */}
      <TopFooter />
    </>
  );
};

export default ContactPageIndex;
