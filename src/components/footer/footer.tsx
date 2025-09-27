import { FaRegChartBar, FaWallet } from "react-icons/fa";
import LanguageSelector from "./languageSelector";
import TimeLine from "./timeLine";

const Footer = () => {
  return (
    <footer className="h-auto min-h-8 px-1 lg:px-4 bg-gray-900 flex flex-row gap-2 md:gap-4 items-center justify-between w-full border-t border-gray-700">
      {/* Giờ */}
      <div className="flex items-center gap-1 md:gap-2 text-gray-400 text-[10px] md:text-xs">
        <TimeLine />
        <span className="flex items-center justify-center gap-[2px]">
          © 2025
          <span className="text-violet-400 underline cursor-pointer">
            LHC Webtrade
          </span>
        </span>
        {/* version */}
      </div>
      {/* <span className="text-[10px] md:text-xs font-normal text-gray-400 mx-1 md:mx-2">
        v.{packageJson.version}
      </span> */}
      <div className="flex flex-row gap-1 md:gap-3 items-center justify-center">
        {/* Tài sản */}
        <div className="flex items-center gap-1 cursor-pointer px-1 md:px-2 py-1 bg-gray-800 text-gray-200 rounded hover:text-white">
          <FaWallet className="text-sm md:text-lg" />
          <span className="text-[10px] md:text-xs font-semibold">Tài sản</span>
        </div>

        {/* Sổ lệnh */}
        <div className="flex items-center gap-1 cursor-pointer px-2 py-1 bg-gray-800 text-gray-200 rounded hover:text-white">
          <FaRegChartBar className="text-sm md:text-lg" />
          <span className="text-[10px] md:text-xs font-semibold">Sổ lệnh</span>
        </div>

        {/* Ngôn ngữ */}
        <LanguageSelector />
      </div>
    </footer>
  );
};

export default Footer;
