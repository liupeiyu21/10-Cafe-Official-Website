// src/Pages/MenuPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import MenuGrid from "../Components/Top/Menu/MenuGrid";
import TopFooter from "../Components/Top/TopFooter";
import MenuHero from "../Components/Top/Menu/MenuHero";
import CategoryTabs from "../Components/Top/Menu/CategoryTabs";

const MenuPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const activeCategory = category || "drink";

  const titleMap: Record<string, string> = {
    drink: "ドリンク",
    food: "フード",
    dessert: "デザート",
    morning: "モーニング",
  };

  return (
    <>
      <MenuHero title={titleMap[activeCategory] || "ドリンク"} />

      <CategoryTabs
        active={activeCategory}
        onChange={(v) => navigate(`/menu/${v}`)}
      />

      <MenuGrid categorySlug={activeCategory} />

      <TopFooter />
    </>
  );
};

export default MenuPage;
