import { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'
import { getNews } from '../../../lib/sanity'

export default function TopNews() {
  const [news, setNews] = useState<any[]>([])

  useEffect(() => {
    getNews().then(setNews)
  }, [])

  return (
    <section className="pb-10 md:pb-32">

      {/* ===== セクションタイトル ===== */}
      <div className="max-w-5xl mx-auto mt-[100px] flex items-center gap-4 text-[#8C8745] pb-14">
        <span className="block h-[2px] w-20 bg-[#8C8745]" />
        <h2 className="whitespace-nowrap text-4xl font-medium tracking-widest">
          お知らせ
        </h2>
        <span className="block h-[2px] flex-1 bg-[#8C8745]" />
      </div>

            {/* ===== お知らせ一覧 ===== */}
      <ul className="max-w-4xl mx-auto ">
        {news.map((item) => (
          <li
            key={item._id}
            className=" flex flex-col gap-3 py-6 pl-[5%] text-sm md:flex-row md:gap-6"
          >
            {/* 日付 */}
            <p className="w-[120px] text-gray-400 shrink-0">
              {item.date}
            </p>

            {/* タイトル */}
            <h3 className="w-[220px] font-semibold shrink-0">
              {item.title}
            </h3>

            {/* 本文 */}
            <div className="flex-1 text-gray-700">
              {item.body && (
                <PortableText value={item.body} />
              )}
            </div>
          </li>
        ))}
      </ul>


    </section>
  )
}
