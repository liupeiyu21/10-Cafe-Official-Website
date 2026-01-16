// src/Components/Top/Menu/MenuGrid.tsx
import { useEffect, useState } from "react";
import { getMenuByCategory, urlFor } from "../../../../lib/sanity";

type MenuGridProps = {
  categorySlug: string;
};

type MenuItem = {
  _id: string;
  title: string;
  price: number;
  image?: any;
  isNew?: boolean;
  tags?: string[];
};

type MenuData = {
  title: string;
  items: MenuItem[];
};

const MenuGrid = ({ categorySlug }: MenuGridProps) => {
  const [data, setData] = useState<MenuData | null>(null);

  useEffect(() => {
    getMenuByCategory(categorySlug).then(setData);
  }, [categorySlug]);

  if (!data) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 pt-24">
      {/* ===== カテゴリタイトル ===== */}
      {/* <h2 className="mb-12 text-3xl font-semibold tracking-wide text-[#8C8745]">
        {data.title}
      </h2> */}

      {/* ===== メニューグリッド ===== */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        {data.items.map((item) => (
          <div key={item._id} className="space-y-3">
            {/* 画像 */}
            <div className="relative aspect-square overflow-hidden rounded bg-gray-200">
              {item.image && (
                <img
                  src={urlFor(item.image).width(500).height(500).url()}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              )}

              {/* NEW バッジ */}
              {item.isNew && (
                <span className="absolute left-2 top-2 rounded bg-[#8C8745] px-2 py-1 text-xs text-white">
                  NEW
                </span>
              )}
            </div>

            {/* 商品名 */}
            <p className="font-semibold">{item.title}</p>

            {/* 価格 */}
            <p className="text-sm">¥{item.price}</p>

          
            {/* タグ（ICE / HOT） */}
            {item.tags && (
            <div className="flex gap-2 text-xs font-medium">
                {item.tags.map((tag) => (
                <span
                    key={tag}
                    className="rounded border border-gray-300 px-2 py-0.5 text-gray-700"
                >
                    {tag}
                </span>
                ))}
            </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuGrid;
