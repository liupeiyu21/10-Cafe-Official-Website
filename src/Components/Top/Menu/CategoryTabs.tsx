const categories = [
  { label: "ドリンク", value: "drink" },
  { label: "フード", value: "food" },
  { label: "デザート", value: "dessert" },
  { label: "モーニング", value: "morning" },
];

type Props = {
  active: string;
  onChange: (v: string) => void;
};

const CategoryTabs = ({ active, onChange }: Props) => {
  return (
    <div className="flex justify-center gap-4 py-12">
      {categories.map((c) => (
        <button
          key={c.value}
          onClick={() => onChange(c.value)}
          className={`px-6 py-2 rounded-full text-sm transition
            ${
              active === c.value
                ? "bg-[#C7C24A] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
