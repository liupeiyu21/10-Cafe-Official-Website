// src/Pages/MenuPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import MenuGrid from "./MenuGrid";
import TopFooter from "../TopFooter";
import MenuHero from "./MenuHero";
import CategoryTabs from "./CategoryTabs";
import WaveCanvas from "./WaveCanvas";
import MenuHeroTitle from "./MenuHeroTitle";
import TopSNSLinks from "../TopSNSLinks";

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
      <TopSNSLinks />

      <TopFooter />
    </>
  );
};

export default MenuPage;
