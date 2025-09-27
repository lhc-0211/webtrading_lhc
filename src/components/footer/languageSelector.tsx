import { useEffect, useRef, useState } from "react";
import { FaGlobe } from "react-icons/fa";

const LanguageSelector = () => {
  const [lang, setLang] = useState("vi");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
    setOpen(false); // ẩn dropdown sau khi chọn
  };

  // Ẩn dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Nút trigger */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 cursor-pointer px-1 md:px-2 py-1 bg-gray-800 text-gray-200 rounded hover:text-white select-none"
      >
        <FaGlobe className="text-sm md:text-lg" />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="text-[10px] md:text-xs absolute bottom-full right-0 mt-1 bg-gray-800 border border-gray-600 rounded shadow-md z-[9999]">
          <select
            value={lang}
            onChange={handleChange}
            className="bg-gray-800 text-white px-1 md:px-2 py-1 rounded focus:outline-none cursor-pointer"
          >
            <option value="vi">🇻🇳 Tiếng Việt</option>
            <option value="en">🇬🇧 English</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
