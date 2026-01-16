const categories = [
  { label: "Drink", value: "drink" },
  { label: "Food", value: "food" },
  { label: "Dessert", value: "dessert" },
  { label: "Morning", value: "morning" },
  { label: "Takeout", value: "takeout" },
];

type Props = {
  active: string;
  onChange: (v: string) => void;
};

const CategoryTabs = ({ active, onChange }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 pt-80 md:pt-100">
      {categories.map((c) => (
        <button
          key={c.value}
          onClick={() => onChange(c.value)}
          className={`
            w-[30%] md:w-auto
            px-4 md:px-20
            py-2 md:py-5
            rounded-full
            text-base
            font-medium
            transition
            cursor-pointer
            ${
              active === c.value
                ? "bg-[#C7C24A] text-white"
                : "bg-gray-100 text-gray-600"
            }
          `}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
