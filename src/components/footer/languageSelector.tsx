import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

const LanguageSelector = () => {
  const [lang, setLang] = useState("vi");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
  };

  return (
    <div className="relative group inline-block">
      {/* Nút trigger */}
      <div className="flex items-center gap-1 cursor-pointer px-1 md:px-2 py-1 bg-gray-800 text-gray-200 rounded hover:text-white">
        <FaGlobe className="text-sm md:text-lg" />
      </div>

      {/* Select xuất hiện ngay dưới, trong cùng khối để không mất hover */}
      <div className="text-[10px] md:text-xs absolute bottom-full right-0 mt-1 bg-gray-800 border border-gray-600 rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
        <select
          value={lang}
          onChange={handleChange}
          className="bg-gray-800 text-white px-1 md:px-2 py-1 rounded focus:outline-none cursor-pointer"
        >
          <option value="vi">🇻🇳 Tiếng Việt</option>
          <option value="en">🇬🇧 English</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
