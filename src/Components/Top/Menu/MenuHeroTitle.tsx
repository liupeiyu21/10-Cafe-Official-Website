type Props = {
  title: string;
};

const HEADER_HEIGHT = 80;

const MenuHeroTitle = ({ title }: Props) => {
  return (
    <div
      className="fixed left-0 z-45 pointer-events-none"
      style={{
        top: HEADER_HEIGHT,
        height: "20vh",          // Canvas と同じ高さ
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
