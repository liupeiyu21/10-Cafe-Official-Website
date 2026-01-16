// src/Pages/MenuPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import MenuGrid from "../Components/Top/Menu/MenuGrid";
import TopFooter from "../Components/Top/TopFooter";
import MenuHero from "../Components/Top/Menu/MenuHero";
import CategoryTabs from "../Components/Top/Menu/CategoryTabs";
import WaveCanvas from "../Components/Top/Menu/WaveCanvas";
import MenuHeroTitle from "../Components/Top/Menu/MenuHeroTitle";

const MenuPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const activeCategory = category || "drink";

  const titleMap: Record<string, string> = {
    drink: "Drink Menu",
    food: "Food Menu",
    dessert: "Dessert Menu",
    morning: "Morning Menu",
    takeout: "Take Out Menu",
  };

  return (
    <>
      <MenuHero />
      <MenuHeroTitle
        title={titleMap[activeCategory] || "Drink Metitle={titleMap[activeCanu"}
      />
      <WaveCanvas />

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
