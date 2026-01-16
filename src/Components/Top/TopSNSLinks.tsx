import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import ScrollTopCharacter from "../ScrollTopCharacter";

const TopSNSLinks = () => {
  return (
    <>

      <div className="flex flex-col items-center gap-4 py-22">
        {/* タイトル */}
        <p className="text-[#8C8745] text-lg md:text-4xl tracking-wide">
          Follow Us
        </p>

        {/* アイコン */}
        <div className="flex gap-12 pt-10">
          <a
            href="https://x.com/10docafe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8C8745] hover:opacity-70 transition"
          >
            <FaXTwitter size={50} />
          </a>

          <a
            href="https://www.instagram.com/10docafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8C8745] hover:opacity-70 transition"
          >
            <FaInstagram size={50} />
          </a>
        </div>
      </div>
      <ScrollTopCharacter />
    </>
  );
};

export default TopSNSLinks;
