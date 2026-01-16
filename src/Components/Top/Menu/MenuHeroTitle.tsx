type Props = {
  title: string;
};

const HEADER_HEIGHT = 70;

const MenuHeroTitle = ({ title }: Props) => {
  return (
    <div
      className="absolute left-0 z-10 pointer-events-none"
      style={{
        top: HEADER_HEIGHT + 50, // ← 少し上にしたいならここを調整
        height: "0vh",
        width: "100%",
      }}
    >
      <div className="max-w-6xl mx-auto h-full flex items-center px-6">
        <h1 className="text-4xl md:text-6xl font-medium text-white">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default MenuHeroTitle;
