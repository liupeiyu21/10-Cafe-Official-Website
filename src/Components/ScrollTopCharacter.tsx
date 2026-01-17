import { ScrollCharacter } from "../Images";



const ScrollTopCharacter = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <img
      src={ScrollCharacter}
      alt="ページ上部へ戻る"
      onClick={handleScrollTop}
      className="
        fixed
        right-6
        bottom-6
        z-50
        w-16
        cursor-pointer
        hover:scale-105
        transition-transform
        duration-200
      "
    />
  );
};

export default ScrollTopCharacter;

